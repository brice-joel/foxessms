<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Services\CampayService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class CampayController extends Controller
{
    private $campayService;

    public function __construct()
    {
        $this->campayService = new CampayService();
        //$this->campayService = $campayService;
    }

    // 1. Endpoint pour initier le paiement (appelé par React)
    public function initiatePayment(Request $request)
    {


        $token = $this->campayService->getToken();
        $amount = $request->input('amount');
        $phone_number = $request->input('phone');
        $reference = CampayController::generateRef();



        $response = Http::withHeaders([
            'Authorization' => 'Token ' . $token,
            'Content-Type' => 'application/json'
        ])->post(env('CAMPAY_BASE_URL') . 'api/collect/', [
            'amount' =>  $amount,
            'from' => '237' . $phone_number,
            'currency' => 'XAF',
            "description" => "Achat sur FOXESSMS",
            'external_reference' => $reference,
        ]);

        if ($response->successful()) {
            //enregistrement du paiement
            $payment =  Payment::create([
                'user_id' => Auth::user()->id,
                'amount' =>  (int)$amount,
                'phone' => '237' . $phone_number,
                'reference' => $reference,
            ]);

            return response()->json([
                'success' => true,
                'message' => "✅ Tapez *126# tapez MTN ou #150*50# pour ORANGE"
            ], 200);
        }

        return response()->json([
            'success' => false,
            'error' => 'Erreur lors de l\'initiation du paiement.',
        ], 400);
    }

    // 2. Endpoint pour le Webhook (appelé par Campay)
    public function handleWebhook(Request $request)
    {
        // ⚠️ Vérification de sécurité du Webhook Campay ici (si disponible, ex: IP Source)

        $data = $request->json()->all();
        $reference = $data['external_ref'];
        $status =  $data['status'] ?? null; // 'SUCCESSFUL', 'FAILED', 'PENDING', etc.



        $user = Auth::user();

        // Logique de mise à jour du paiement
        $payment = Payment::where('reference', $reference)->first();
        if (!$payment) {
            return response()->json(['message' => 'Référence non trouvée'], 404);
        }


        // if ($status === 'SUCCESSFUL') {

        //     // Envoyer un e-mail de confirmation, etc.
        // } elseif ($status === 'FAILED') {
        // }
        //update payment
        $payment->status = 1;
        $payment->save();
        //update user balance
        CampayController::updateBalance($payment->amount);

        return response()->json(['success' => true, 'message' => '✅ Vous avez recharger votre compte avec succès'], 200);
    }


    /**
     * Génère une référence de paiement selon le format: F.JJMMAA.HHMN.CODE
     * CODE: Une lettre (A-Z) suivie de 4 chiffres aléatoires (0-9).
     *
     * @return string La référence de paiement générée.
     */
    public static function generateRef(): string
    {
        // 1. Obtient la date/heure actuelle
        $now = Carbon::now();

        // 2. Format JJMMAA
        $datePart = $now->format('dmy'); // d: jour, m: mois, y: année (2 chiffres)

        // 3. Format HHMN
        $timePart = $now->format('Hi');  // H: heure (24h), i: minute

        // 4. Génère le CODE aléatoire (Lettre A-Z + 4 chiffres)

        $letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Liste des lettres de l'alphabet

        $randomLetter = $letters[rand(0, strlen($letters) - 1)]; // Sélectionne une lettre aléatoire
        $randomNumber = str_pad(random_int(0, 9999), 4, '0', STR_PAD_LEFT); //Génère un nombre aléatoire à 4 chiffres (0000 à 9999) Utilisation de mt_rand ou random_int (plus sécurisé)
        $randomCode = $randomLetter . $randomNumber; // self::generateRandomCode();

        // 5. Assemble la référence finale
        $reference = sprintf('F.%s.%s.%s', $datePart, $timePart, $randomCode);

        return $reference;
    }

    public static function updateBalance($amount)
    {
        $user = Auth::user();

        $balance = $user->balance;

        $new_balance = (int)($balance + $amount);


        $user->balance = $new_balance;
        $user->save();
    }
}

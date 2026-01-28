<?php

namespace App;

use Illuminate\Support\Facades\Http;

class FaussmsApiService
{
    private $action;

    public function __construct(string $action)
    {
        $this->action = $action;
    }


    public function getData($action)
    {
        $apikey = env('FAUSSMS_API_KEY');
        return $apikey;
        $apiUrl = "https://faussms.com/stubs/handler_api.php?api_key={$apiKey}&action={$action}";

        try {
            // Laravel utilise le client HTTP Guzzle pour faire la requête
            $response = Http::get($apiUrl);

            // Si la réponse n'est pas un succès (ex: 404, 500), lance une exception
            $response->throw();

            // Retourne le JSON de l'API externe directement à l'application React/Inertia
            return response()->json($response->json());
        } catch (\Throwable $e) {
            // Gérer les erreurs de connexion ou de l'API externe
            return response()->json([
                'error' => 'Erreur lors de la récupération des données de l\'API externe.',
                'details' => $e->getMessage(),
            ], 500);
        }
    }
}

<?php

namespace App\Http\Controllers\API;

use App\FaussmsApiService;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiFaussmsController extends Controller
{
    //
    function getCountries()
    {
        // ⚠️ REMPLACEZ ceci par votre clé d'API réelle
        $apiKey = '28u73dux4mxo3imspwg1xbx91ki9hmfo';
        $apiUrl = "https://faussms.com/stubs/handler_api.php?api_key={$apiKey}&action=getCountries";

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

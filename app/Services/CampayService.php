<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class CampayService
{
    private $token = null;

    public function getToken()
    {
        if ($this->token) {
            return $this->token;
        }

        $response = Http::post(env('CAMPAY_BASE_URL') . 'api/token/', [
            'username' => env('CAMPAY_USERNAME'),
            'password' => env('CAMPAY_PASSWORD'),
        ]);

        if ($response->successful()) {
            $this->token = $response->json('token');
            return $this->token;
        }

        throw new \Exception("Impossible d'obtenir le token Campay.");
    }
    // ... suite des méthodes de paiement


}

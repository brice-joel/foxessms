<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\User; // Assurez-vous d'importer votre modèle User si besoin
use Illuminate\Support\Facades\Redirect;

use function PHPSTORM_META\type;

class PaymentController extends Controller
{


    function mobileMoney(Request $request)
    {

        return inertia("MobileMoney");
    }
}

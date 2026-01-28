<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{

    //
    function dashboard()
    {
        $balance = Auth::user()->balance;

        return inertia("Dashboard", [
            "balance" => $balance
        ]);
    }
    function recharge()
    {
        return inertia("Recharge");
    }

    function buyNumbers()
    {
        return inertia("BuyNumbers");
    }
    function referEarn()
    {
        return inertia("ReferEarn");
    }
    function numbersHistory()
    {
        return inertia("NumbersHistory");
    }
    function transactionsHistory()
    {
        $transactions = Auth::user()->payments;
        // dd($transactions);
        return inertia("TransactionsHistory", [
            'transactions' => $transactions
        ]);
    }
}

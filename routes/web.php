<?php

use App\Http\Controllers\API\ApiFaussmsController;
use App\Http\Controllers\CampayController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::prefix('')->controller(PageController::class)->middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', 'dashboard')->name('dashboard');
    Route::get('/buy-numbers', 'buyNumbers')->name('buy-numbers');
    Route::get('/refer-earn', 'referEarn')->name('refer-earn');
    Route::get('/recharge', 'recharge')->name('recharge');
    Route::get('/numbers-history', 'numbersHistory')->name('numbers-history');
    Route::get('/transactions-history', 'transactionsHistory')->name('transactions-history');
});


Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');

/*---------API FAUSSMS------------*/
Route::prefix('/api/faussms')->controller(ApiFaussmsController::class)->name('api.faussms.')->group(function () {
    Route::get('/countries', 'getCountries')->name('get-countries');
});



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/paiement')->controller(PaymentController::class)->name('payment.')->middleware('auth')->group(function () {
    Route::get('/recharge/mobile-money', 'mobileMoney')->name('recharge.mobile-money');
});


/* API ROUTES */
Route::prefix('/api/campay')->controller(CampayController::class)->name('api.campay.')->middleware('auth')->group(function () {
    // Route appelée par React pour lancer la transaction
    Route::post('/initiate', 'initiatePayment')->name('initiate');
    // Route ASYNCHRONE appelée par Campay (le webhook)
    Route::post('/webhook',  'handleWebhook')->name('webhook')->withoutMiddleware('verifyCsrfToken'); // without middleware verify csrf token
});


require __DIR__ . '/auth.php';

<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::post('send-mail', function (Request $request) {

    $details = [
        'name' => $request->get('name'),
        'email' => $request->get('email'),
        'subject' => $request->get('subject'),
        'message' => $request->get('message')
    ];   

    \Mail::to('your_receiver_email@gmail.com')->send(new \App\Mail\PortfolioMail($details));

    return 'success';   
});

Route::get('/{any}', function () {
    return view('vue');
})->where('any', '.*');

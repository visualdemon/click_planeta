<?php

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;


Route::get('/user', function (Request $request) {
    return Auth('web')->user();
});

Route::get('users', function () {
    return User::all();
});

Route::group(['namespace' => 'Api\Auth'], function () {
    Route::post('/login', 'AuthenticationController@login');
    Route::post('/logout', 'AuthenticationController@logout')->middleware('auth:api');
    Route::post('/register', 'RegisterController@register');
    Route::post('/forgot', 'ForgotPasswordController@forgot');
    Route::post('/reset', 'ForgotPasswordController@reset');
    Route::post('/getClick01', 'Click01Controller@getClick01');
    Route::post('/getClick02', 'Click02Controller@getClick02');
    Route::post('/register', 'Click03Controller@register');
    Route::post('/getClick03', 'Click03Controller@getClick03');
});
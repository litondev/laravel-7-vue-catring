<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(["namespace" => "User\Actions","as" => "user."],function(){
	Route::apiResource("product","ProductController")->only("index","show");
	
	Route::group(["prefix" => "user","middleware" => "isNotAuth"],function(){
		Route::post("signup","AuthController@signup")->name("signup");
		Route::post("signin","AuthController@signin")->name("signin");
	});

	Route::group(["prefix" => "user","middleware" => "isUser"],function(){
	 	Route::post("logout","AuthController@logout")->name("logout");
		Route::post("/{user}/photo","UserController@updatePhoto")->name("user.update.photo");
	 	Route::apiResource("notification","NotificationController")->only('index');	 	
	});

	Route::apiResource("user/setting","SettingController")->only("index");	
	Route::apiResource("user","UserController")->only("index","update");
});
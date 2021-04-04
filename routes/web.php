<?php

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


// Route::group(["namespace" => "Admin"],function(){
// 	Route::get("/admin/{any}","HomeController@index")->where('any','.*')->name("admin")
// 		->middleware("isAdmin");
// });

Route::group(["namespace" => "User"],function(){
	Route::get("/{any}","HomeController@index")->where("any",".*")->name("user");
});
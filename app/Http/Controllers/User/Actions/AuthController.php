<?php

namespace App\Http\Controllers\User\Actions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\User\{
	SigninRequest,
	SignupRequest
};
use App\Http\Resources\User\{
	UserResource
};
use App\Models\User;
use App\Helpers\GlobalHelper;

class AuthController extends Controller
{
    public function signin(SigninRequest $request){   
    	if(auth()->attempt($request->validated())){
			return response()->json(new UserResource(auth()->user()),201);
		}    	

		return response()->json([
			"message" => "Failed",
			"error" => "Data tidak ditemukan"
		],422);
    }

    public function signup(SignupRequest $request){
    	try{    	
            User::create(GlobalHelper::validasiPhone($request->validated()));    	

			return response()->json([
				"message" => "Success"
			],201);		
		}catch(\Throwable $e){
    		return response()->json([
    			"message" => "Failed",
    			"error" => $e->getMessage()
    		],422);
    	}
    }

    public function logout(){
    	auth()->logout();

    	return response()->json([
    		"message" => "Success"
    	],201);
    }
}
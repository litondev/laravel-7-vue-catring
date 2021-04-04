<?php

namespace App\Http\Controllers\User\Actions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\User\{
    UserResource
};
use App\Http\Requests\User\{
    UpdateUserRequest,
    UpdateUserPhotoRequest
};
use App\Models\User;
use App\Helpers\GlobalHelper;
use App\Uploads\UploadPhotoUser;

class UserController extends Controller
{
    public function __construct(){
        $this->middleware("isUser")->only("update","updatePhoto");
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(auth()->check() ? new UserResource(auth()->user()) : Null);
    }    
   
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateUserRequest $request,User $user)
    {        
        try{                    
            $payload = GlobalHelper::validasiPhone($request->only("email","phone"));

            if($request->filled("password")){
                $payload["password"] = \Hash::make($request->password);
            }

            if(!\Hash::check($request->password_confirm,$user->password)){
                throw new \ErrorException("Password tidak sama");
            }             

            $user->update($payload);

            return response()->json([
                "message" => "Success",
                "user" =>  new UserResource($user)
            ],201);     
        }catch(\Throwable $e){
            return response()->json([
                "message" => "Failed",
                "error" => $e->getMessage()
            ],422);
        }
    }

    public function updatePhoto(UpdateUserPhotoRequest $request,User $user){
        try{        
            $oldPhoto = $user->photo;        

            $user->update([
                "photo" =>  UploadPhotoUser::uploadPhoto()
            ]);

            UploadPhotoUser::deleteOldPhoto($oldPhoto);

            return response()->json([
              "message" => "Success",
              "user" => new UserResource($user)
            ],201);
        }catch(\Throwable $e){    
            return response()->json([
                "message" => "Failed",
                "error" => $e->getMessage()
            ],422);
        }
    }
}
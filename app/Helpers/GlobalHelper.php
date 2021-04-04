<?php 
namespace App\Helpers;

use App\Models\User;

class GlobalHelper{
	public static function validasiPhone($payload){
		$mobile_phone = preg_replace('/[^0-9\+]/','',strval($payload['phone']));
        if(substr($mobile_phone, 0,2) != '08'){
            throw new \ErrorException("No Telp harus memakai 08");           
        }

        if(auth()->user()){
            $validPhone = substr($mobile_phone, 0,2);    
            $payload['phone'] = $validPhone . preg_replace('/[^0-9]/','',strval(explode($validPhone,$mobile_phone)[1]));                                              
            if(User::where('phone',$payload['phone'])
                ->whereNotIn("id",[auth()->user()->id])
                ->first()
            ){
                throw new \ErrorException("No telah terpakai");           
            }      
        }

        return $payload;
	}
}
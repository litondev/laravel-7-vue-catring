<?php 
namespace App\Uploads;

use Intervention\Image\ImageManager as Image;
use Illuminate\Support\Str;

class UploadPhotoUser{
	public static function uploadPhoto(){
		$fileName = Str::random("20").'.'.request()->file('photo')->getClientOriginalExtension();

        $theImage = new Image();
        
        $theImage->make(request()->file('photo'))
        ->resize(null, 650, function($constraint){
            $constraint->aspectRatio();
        })
        ->save(public_path() . "/assets/images/users/"."".$fileName);

        return $fileName;
	}

	public static function deleteOldPhoto($oldPhoto){
		if($oldPhoto != "default.png"){            
            if(file_exists(public_path() . "/assets/images/users/"."".$oldPhoto)){
                unlink(public_path() . "/assets/images/users/"."".$oldPhoto);
            }
        } 
	}
}
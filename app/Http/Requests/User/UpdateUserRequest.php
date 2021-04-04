<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\TraitRequest;

class UpdateUserRequest extends FormRequest
{
    use TraitRequest;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $validasi = [            
            'email' => 'required|email|unique:users,email,'.auth()->user()->id,
            'phone' => 'required|unique:users,phone,'.auth()->user()->id,            
            'password_confirm' => 'required|min:8'
        ];

        if(request()->filled("password")){
            $validasi = array_merge($validasi,[
                "password" => "min:8"
            ]);
        }

        return $validasi;
    }
}

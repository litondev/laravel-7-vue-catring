<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;
use App\Traits\TraitRequest;

class UpdateUserPhotoRequest extends FormRequest
{
    use TraitRequest;

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "photo" => "required|image|mimes:jpg,png,jpeg|max:10024|dimensions:max_width=5000,max_height=5000"
        ];
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TraitModel;

class Review extends Model
{
	use TraitModel;
	
    protected $guarded = ['id'];

    public function user(){
    	return $this->belongsTo(User::class);
    }
}

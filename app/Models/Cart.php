<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TraitModel;

class Cart extends Model
{
	use TraitModel;
	
    protected $guarded = ['id'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TraitModel;

class Product extends Model
{
	use TraitModel;
	
    protected $guarded = ["id"];
}

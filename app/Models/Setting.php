<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TraitModel;

class Setting extends Model
{
	use TraitModel;
	
    protected $guarded = ['id'];
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\TraitModel;

class Notification extends Model
{
	use TraitModel;
	
    protected $guarded = ['id'];
}

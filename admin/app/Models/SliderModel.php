<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class sliderModel extends Model
{
    public  $table='slider';
    public  $primaryKey='id';
    public  $incrementing='true';
    public  $keyType='int';
    public  $timestamps='false';
}

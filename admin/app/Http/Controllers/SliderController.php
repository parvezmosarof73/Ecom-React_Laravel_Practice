<?php

namespace App\Http\Controllers;

use App\Models\sliderModel;
use Illuminate\Http\Request;

class SliderController extends Controller
{
    function SendSliderInfo(){
        $result=SliderModel::all();
        return $result;
    }
}

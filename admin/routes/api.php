<?php

use App\Http\Controllers\VisitorController;
use Illuminate\Support\Facades\Route;

Route::get('/GetVisitorDetails',[VisitorController::class,'GetVisitorDetails']);
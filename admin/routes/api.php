<?php

use App\Http\Controllers\CategoryDetailsController;
use App\Http\Controllers\ContactListController;
use App\Http\Controllers\ProductListController;
use App\Http\Controllers\SiteInfoController;
use App\Http\Controllers\VisitorListController;
use Illuminate\Support\Facades\Route;

Route::get('/GetVisitorDetails',[VisitorListController::class,'GetVisitorDetails']);
Route::post('/PostContactDetails',[ContactListController::class,'PostContactDetails']);
Route::get('/SendSiteInfo',[SiteInfoController::class,'SendSiteInfo']);
Route::get('/SendCategoryDetails',[CategoryDetailsController::class,'SendCategoryDetails']);

Route::get('/ProductListByRemark/{remark}',[ProductListController::class,'ProductListByRemark']);
Route::get('/ProductListByCategory/{Category}',[ProductListController::class,'ProductListByCategory']);
Route::get('/ProductListBySubCategory/{Category}/{SubCategory}',[ProductListController::class,'ProductListBySubCategory']);
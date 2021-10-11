<?php

namespace App\Http\Controllers;

use App\Models\ProductDetailsModel;
use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductDetailsController extends Controller
{
    function ProductDetails(Request $request){
        $product_code=$request->code;
        $ProductDetails=ProductDetailsModel::where('product_code',$product_code)->get();
        $ProductList=ProductListModel::Where('product_code',$product_code)->get();

        $item=[
            "ProductDetails"=>$ProductDetails,
            "ProductList"=>$ProductList,
        ];

        return $item;
    }
}

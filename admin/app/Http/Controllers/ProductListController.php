<?php

namespace App\Http\Controllers;

use App\Models\ProductListModel;
use Illuminate\Http\Request;

class ProductListController extends Controller
{
    function ProductListByRemark(Request $request){
        $remark= $request->remark;
        $ProductList= ProductListModel::where('remark',$remark)->get();

        return $ProductList;
    }

    function ProductListByCategory(Request $request){
        $Category= $request->Category;
        $ProductList= ProductListModel::where('category',$Category)->get();

        return $ProductList;
    }

    function ProductListBySubCategory(Request $request){
        $Category= $request->Category;
        $SubCategory= $request->SubCategory;
        $ProductList= ProductListModel::where('category',$Category)->where('subcategory',$SubCategory)->get();

        return $ProductList;
    }
}

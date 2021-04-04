<?php

namespace App\Http\Controllers\User\Actions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\{
    Product,
    Review
};
use App\Http\Resources\User\{
    ProductCollection,
    ProductResource
};

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(
            new ProductCollection(
                Product::orderBy('id','desc')
                    ->where('is_active',true)
                    ->when(request()->filled('search'),function($q){                    
                        $q->where('name','like','%'.request()->search.'%');
                    })
                    ->paginate(9)
            )
        );
    }    
    
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($product)
    {
        $product = Product::findOrFail($product);    

        $product->reviews = Review::with('user')
            ->where('product_id',$product->id)
            ->orderBy('id','desc')
            ->paginate(5);

        return response()->json($product->is_active ? new ProductResource($product) : Null);
    }
}

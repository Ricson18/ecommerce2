<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //GET http://localhost:8000/api/products
    public function index()
    {
        return Product::with('category')->get()->toJson();
        // return response()->json();
        // return 'index';
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //POST http://localhost:8000/api/products
    public function store(Request $request)
    {
        Product::create($request->all());
        return 'store';
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //GET http://localhost:8000/api/products/1
    public function show(int $id)
    {
        // $product=Product::find($id)->with('category');
        // return response()->json($product);
        return Product::with('category')->find($id)->toJson();
        // return 'show';
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //PUT http://localhost:8000/api/products/1
    public function update(Request $request, $id)
    {
        return 'update';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //DELETE http://localhost:8000/api/products/1
    public function destroy($id)
    {
        return 'destroy';
    }
}

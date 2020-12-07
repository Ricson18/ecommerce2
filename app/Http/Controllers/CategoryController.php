<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    //GET http://localhost:8000/api/categories
    public function index()
    {
        return Category::all()->toJson();
        // select categories.*, from categories,products where categories.product_id=products.id
        // Category::map((category){

        // });
        // Category::with('products')->
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //POST http://localhost:8000/api/categories
    public function store(Request $request)
    {
        Category::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //GET http://localhost:8000/api/categories/1
    public function show($id)
    {
        return Category::find($id)->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //PUT http://localhost:8000/api/categories/1
    public function update(Request $request, $id)
    {
        // Category::find($id)->
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    //DELETE http://localhost:8000/api/categories/1
    public function destroy($id)
    {
        Category::delete($id);
    }
}

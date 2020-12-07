<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return $orders=Order::with(['customer'=>function($query){
            $query->select(['customers.id','customers.fname','customers.lname'])->get();
            // $query->select(['customers.fname','customers.lname'])->get()->toJson();
        }])->get()->toJson();

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Order::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return Order::with(['orderDetail.products','orderDetail','customer'])->get()->toJson();
        return $orders=Order::find($id)->with(['customer'=>function($query){
            $query->select(['customers.id','customers.fname','customers.lname','customers.billingCity',
                            'customers.billingCountry','customers.billingAddress1',
                            'customers.billingPostalCode','customers.billingEmail','customers.email',
                            'customers.phone'
                    ])->get();
        },'orderDetail.products'=>function($query){
            $query->select([
                'products.id','products.name'
            ])->get();
        }])->first()->toJson();

        // return Order::find($id)->toJson();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // Order::update();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Order::destroy($id);
    }
}

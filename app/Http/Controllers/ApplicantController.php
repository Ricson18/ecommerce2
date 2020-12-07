<?php

namespace App\Http\Controllers;

use App\Models\Applicant;
use Illuminate\Http\Request;

class ApplicantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Applicant::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userDetails=$request->item['userDetails'];
        extract($userDetails);
        // $request->validate([
            //     'name' => 'required', 'country' => 'required', 
            //     'skype_id' => 'required', 'about' => 'required', 
            // ]);
            
        if( empty($name)||empty($country)||
            empty($skype_id)||empty($about))
            return ;
        
        return Applicant::create([
            'name' => $name, 'country' => $country, 
            'skype_id' => $skype_id, 'about' => $about,     
        ])->toJson();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
       return Applicant::find($id)->toJson();
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
        return Applicant::find($id)->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Applicant::destroy($id);
    }
}

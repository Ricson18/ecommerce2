<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return User::all()->toJson();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // $request->validate([
        // 'email' => 'required|email|exists:users,email', 
        // 'password' => 'required'
        // ]);

        User::create($request->all());
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // return User::findOrFail($id)->toJson();

        $user = User::find($id);

        if($user) {
            return response()->json($user);
        }

        return response()->json(['message' => 'User not found!'], 404);

          //   'social_links'=>[
          //     'twitter'=>'https://twitter.com/adoptionism744',
          //     'facebook'=>'https://www.facebook.com/adoptionism664',
          //     'instagram'=>'https://www.instagram.com/adopt-ionism744/',
          //     'github'=>'https://github.com/madop818',
          //     'codepen'=>'https://codepen.io/adoptism243',
          //     'slack'=>'@adoptionism744'
          //   ],
            // 'permissions'=>[
            //   'users'=>[
            //     'read'=>true,
            //     'write'=>false,
            //     'create'=>false,
            //     'delete'=>false
            //   ],
            //   'posts'=>[
            //     'read'=>true,
            //     'write'=>true,
            //     'create'=>true,
            //     'delete'=>true
            //   ],
            //   'comments'=>[
            //     'read'=>true,
            //     'write'=>false,
            //     'create'=>true,
            //     'delete'=>false
            //   ]
      
            // ]
        // ];      
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
        return User::find($id)->update($request->all());
        // return 'update';
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return User::destroy($id);
        // return 'delete';
    }
    public function update_user(){
        return 'welcome';
    }

}

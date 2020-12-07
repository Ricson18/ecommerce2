<?php

namespace App\Http\Controllers;

// use App\User;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'fname' => 'required', 
            // 'lname' => 'required', 
            'email' => 'required|email', 
            // 'password' => 'required|min:6',

            // 'isAdmin'   =>'required', 
            // 'phone'     =>
            // 'city'      =>
            // 'state'     =>
            // 'country'   =>
            // 'image'     =>
            
            'role'      =>'required', 
            // 'dob'       =>
            // 'gender'    =>'required', 
            // 'address'   =>

        ]);

        $user = User::create([
            'fname' => $request->fname, 
            'lname' => $request->lname, 
            'status' => 'Active', 
            // 'status' => $request->status, 
            'email' => $request->email, 
            // 'isAdmin'   =>$request->isAdmin,
            'phone'     => $request->phone,
            // 'city'      => $request->city,
            // 'state'     => $request->state,
            // 'country'   => $request->country,
            'image'     => $request->image,
            'role'      => $request->role, 
            // 'dob'       => $request->dob,
            'gender'    => $request->gender, 
            // 'address'   => $request->address,

            'password' => bcrypt('password'),
            // 'password' => bcrypt($request->password),
        ]);

        // $user = User::create([
        //     'name' => $request->name, 
        //     'email' => $request->email, 
        //     'password' => bcrypt($request->password)
        // ]);

        return response()->json($user);
    }

public function login(Request $request)
{
    $request->validate([
        'email' => 'required|email|exists:users,email', 
        'password' => 'required'
    ]);

    if( Auth::attempt(['email'=>$request->email, 'password'=>$request->password]) ) {
        $user = Auth::user();

        $token = $user->createToken($user->email.'-'.now());

        return response()->json([
            'userData'=>$user,
            'token' => $token->accessToken
        ]);
    }
}

}
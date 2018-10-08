<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Firebase\Auth as FirebaseAuth;
use CodeShopping\Http\Resources\UserResource;
use CodeShopping\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserProfileController extends Controller
{
    /**
     * @param Request $request
     * @return UserResource
     */
    public function update(Request $request)
    {
        $data = $request->all();

        if($request->has('token')){
            $token = $request->token;
            $data['phone_number'] = $this->getPhoneNumber($token);
        }

        $data['photo'] = $data['photo'] ?? null;
        $user = \Auth::guard('api')->user();
        $user->updateWithProfile($data);
        return new userResource($user);
    }

    private function getPhoneNumber($token)
    {
        $firebaseAuth = app(FirebaseAuth::class);
        return $firebaseAuth->phoneNumber($token);
    }
}
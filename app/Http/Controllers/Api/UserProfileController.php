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
     * @return array
     */
    public function update(Request $request)
    {
        $data = $request->all();

        if($request->has('token')){
            $token = $request->token;
            $data['phone_number'] = $this->getPhoneNumber($token);
        }
        if($request->has('remove_photo')){
            $data['photo'] = null;
        }
        $user = \Auth::guard('api')->user();
        $user->updateWithProfile($data);
        $resource = new userResource($user);
        $newToken = \Auth::guard('api')->login($user);
        return [
            'user' => $resource->toArray($request),
            'token' => $newToken
        ];
    }

    private function getPhoneNumber($token)
    {
        $firebaseAuth = app(FirebaseAuth::class);
        return $firebaseAuth->phoneNumber($token);
    }
}

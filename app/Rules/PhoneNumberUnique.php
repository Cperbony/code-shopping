<?php

namespace CodeShopping\Rules;

use CodeShopping\Firebase\Auth as FirebaseAuth;
use CodeShopping\Models\UserProfile;
use Illuminate\Contracts\Validation\Rule;

class PhoneNumberUnique implements Rule
{
    /**
     * Create a new rule instance.
     *
     */
    public function __construct()
    {
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string $attribute
     * @param $tokenValue
     * @return bool
     */
    public function passes($attribute, $tokenValue)
    {
        $firebaseAuth = app(FirebaseAuth::class);
        try {
            $phoneNumber = $firebaseAuth->phoneNumber($tokenValue);
            $query = (new UserProfile)->where('phone_number', $phoneNumber);
            $profile = $query->first();
            return $profile == null;
        } catch (\Exception $e) {
            return false;
        }
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return trans('validation.phonenumberunique');
    }
}

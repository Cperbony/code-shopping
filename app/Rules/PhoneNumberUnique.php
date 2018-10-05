<?php

namespace CodeShopping\Rules;

use CodeShopping\Firebase\Auth as FirebaseAuth;
use CodeShopping\Models\UserProfile;
use Illuminate\Contracts\Validation\Rule;

class PhoneNumberUnique implements Rule
{
    /**
     * @var null
     */
    private $ignoredUserId;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct($ignoredUserId = null)
    {

        $this->ignoredUserId = $ignoredUserId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $firebaseAuth = app(FirebaseAuth::class);
        try{
            $phoneNumber = $firebaseAuth->phoneNumber($value);
            $query = (new UserProfile)->where('phone_number', $phoneNumber);

            $profile = $query->first();
            $userWithIgnoredId = $this->ignoredUserId != null && $this->ignoredUserId == $profile->user->id;
            return is_null($profile) || ($userWithIgnoredId);
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

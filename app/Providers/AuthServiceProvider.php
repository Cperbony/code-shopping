<?php

namespace CodeShopping\Providers;

use CodeShopping\Models\User;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        'CodeShopping\Model' => 'CodeShopping\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        \Gate::define('is_seller', function ($user){
           return $user->role == User::ROLE_SELLER;
        });
    }
}

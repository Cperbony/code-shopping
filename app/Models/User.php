<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

    protected $dates = ['deleted_at'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

//    public static function createCustom($attributes = array())
//    {
//        return parent::create($attributes);
//    }

    public function fill(array $attributes)
    {
        !isset($attributes['password']) ?: $attributes['password'] = bcrypt($attributes['password']);
        return parent::fill($attributes);
    }
}

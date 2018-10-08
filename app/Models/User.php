<?php

declare(strict_types=1);

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, SoftDeletes;

    const ROLE_SELLER = 1;
    const ROLE_CUSTOMER = 2;

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

    /**
     * @param array $data
     * @return User
     * @throws \Exception
     */
    public static function createCustomer(array $data): User
    {
        try {
            UserProfile::uploadPhoto($data['photo']);
            \DB::beginTransaction();
            $user = self::createCustomerUser($data);
            UserProfile::saveProfile($user, $data);
            \DB::commit();
        } catch (\Exception $e) {
            //excluir a photo
            UserProfile::deleteFile($data['photo']);
            \DB::rollBack();
            throw $e;
        }
        return $user;
    }

    private static function createCustomerUser(array $data): User
    {
        $data['password'] = bcrypt(str_random(16));
        $user = User::create($data);
        $user->role = User::ROLE_CUSTOMER;
        $user->save();
        return $user;
    }

    public function updateWithProfile(array $data): User
    {
        try {
            if (isset($data['photo'])) {
                UserProfile::uploadPhoto($data['photo']);
            }

            \DB::beginTransaction();
            $this->fill($data);
            $this->save();
            UserProfile::saveProfile($this, $data);
            \DB::commit();
        } catch (\Exception $e) {
            if (isset($data['photo'])) {
                //excluir a photo
                UserProfile::deleteFile($data['photo']);
            }
            \DB::rollBack();
            throw $e;
        }
        return $this;
    }

//    public static function createCustom($attributes = array())
//    {
//        return parent::create($attributes);
//    }

    public function fill(array $attributes)
    {
        !isset($attributes['password']) ?: $attributes['password'] = bcrypt($attributes['password']);
        return parent::fill($attributes);
    }

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->id;
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [
            'email' => $this->email,
            'name' => $this->name
        ];
    }

    public function profile()
    {
        //withDefault, utiliza o pattern NullPattern, pois o perfil pode não ter registro.
        //o withDefault, nos devolve uma instância vazia de user padrão, mesmo que não exista um perfil
        return $this->hasOne(UserProfile::class)->withDefault();
    }
}

<?php

declare(strict_types=1);

namespace CodeShopping\Events;


use CodeShopping\Models\User;

class UserCreatedEvent
{
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }

    /**
     * @return User
     */
    public function getUser(): User
    {
        return $this->user;
    }




}

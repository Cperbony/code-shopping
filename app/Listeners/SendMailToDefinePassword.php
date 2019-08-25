<?php

namespace codeshopping\listeners;

use codeshopping\events\usercreatedevent;

class sendMailtoDefinePassword
{
    /**
     * create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * handle the event.
     *
     * @param  usercreatedevent  $event
     * @return void
     */
    public function handle(usercreatedevent $event)
    {
        $user =  $event->getuser();
        $token = \Password::broker()->createToken($user);

        $user->sendPasswordResetNotification($token);
        //Enviar notificação personalizada
        //$user->notify(new \Notification($token));
    }
}

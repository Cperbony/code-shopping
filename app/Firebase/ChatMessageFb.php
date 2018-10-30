<?php
/**
 * Created by PhpStorm.
 * User: Claus Perbony
 * Date: 30/10/2018
 * Time: 19:17
 */

namespace CodeShopping\Firebase;


class ChatMessageFb
{
    use FirebaseSync;

    private $chatGroup;

    public function create(array $data)
    {
        $this->chatGroup = $data['chat_group'];
        $type = $data['type'];
        switch ($type) {
            case 'audio':
            case 'image':
        }
        $reference = $this->getMessagesReference();
        $reference->push([
            'type' => $data['type'],
            'content' => $data['content'],
            'created_at' => ['.sv' => 'timestamp'],
            'user_id' => $data['firebase_uid']
        ]);

    }

    private function getMessagesReference()
    {
        $path = "/chat_groups/{$this->chatGroup->id}/messages";
        return $this->getFirebaseDatabase()->getReference();
    }

}
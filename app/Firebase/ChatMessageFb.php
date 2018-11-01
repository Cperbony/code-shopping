<?php
/**
 * Created by PhpStorm.
 * User: Claus Perbony
 * Date: 30/10/2018
 * Time: 19:17
 */

namespace CodeShopping\Firebase;


use CodeShopping\Models\ChatGroup;
use Illuminate\Http\UploadedFile;

class ChatMessageFb
{
    use FirebaseSync;

    private $chatGroup;

//    /**
//     * ChatMessageFb constructor.
//     * @param $chatGroup
//     */
//    public function __construct($chatGroup)
//    {
//        $this->chatGroup = $chatGroup;
//    }

    public function create(array $data)
    {
        $this->chatGroup = $data['chat_group'];
        $type = $data['type'];
        switch ($type) {
            case 'audio':
            case 'image':
                $this->upload($data['content']);
                /** @var UploadedFile $uploadedFile */
                $uploadedFile = $data['content'];
                $fileUrl = $this->groupFilesDir() . '/' . $uploadedFile->hashName();
                $data['content'] = $fileUrl;
        }
        $reference = $this->getMessagesReference();
        $reference->push([
            'type' => $data['type'],
            'content' => $data['content'],
            'created_at' => ['.sv' => 'timestamp'],
            'user_id' => $data['firebase_uid']
        ]);
    }

    private function upload(UploadedFile $file)
    {
        $file->store($this->groupFilesDir(), ['disk' => 'public']);
    }

    private function groupFilesDir()
    {
        return ChatGroup::DIR_CHAT_GROUPS . '/' . $this->chatGroup->id . '/messages_files';
    }

    public function deleteMessages(ChatGroup $chatGroup)
    {
        $this->chatGroup = $chatGroup;
        $this->getMessagesReference()->remove();
    }

    private function getMessagesReference()
    {
        $path = "/chat_groups/{$this->chatGroup->id}/messages";
        return $this->getFirebaseDatabase()->getReference($path);
    }

}
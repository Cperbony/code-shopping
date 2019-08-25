<?php

use CodeShopping\Models\ChatGroup;

class ChatMessagesLargerFbSeeder extends ChatMessagesFbSeeder
{
    protected $numMessages = 100;

    protected function getChatGroups()
    {
        return ChatGroup::whereId(1)->get();
    }
}

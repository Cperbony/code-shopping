<?php

use CodeShopping\Firebase\ChatMessageFb;
use CodeShopping\Models\ChatGroup;
use CodeShopping\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Seeder;
use Faker\Factory as FakerFactory;

class ChatMessagesFbSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** @var Collection $chatGroups */
        $chatGroups = ChatGroup::all();
        $users = User::all();
        $chatMessage = new ChatMessageFb();
        $chatGroups->each(function ($group) use ($users, $chatMessage) {
            $chatMessage->deleteMessages($group);
            foreach (range(1, 10) as $value) {
                $content = FakerFactory::create()->sentence(10);
                $type = 'text';

                $chatMessage->create([
                    'chat_group' => $group,
                    'content' => $content,
                    'type' => $type,
                    'firebase_uid' => $users->random()->profile->firebase_uid
                ]);
            }
        });
    }
}

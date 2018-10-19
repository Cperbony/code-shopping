<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ChatGroupUserRequest;
use CodeShopping\Http\Resources\ChatGroupUserResource;
use CodeShopping\Models\ChatGroup;
use CodeShopping\Models\User;
use Illuminate\Database\Eloquent\Collection;

class ChatGroupUserController extends Controller
{

    public function index(ChatGroup $chat_group)
    {
        return new ChatGroupUserResource($chat_group);
    }

    public function store(ChatGroupUserRequest $request, ChatGroup $chat_group)
    {
        $chat_group->users()->attach($request->users);
        /** @var Collection $users */
        $users = User::whereIn('id', $request->users)->get();
        return response()->json(new ChatGroupUserResource($chat_group, $users), 201);
    }

    public function destroy(ChatGroup $chat_group, User $user)
    {
        $chat_group->users()->detach($user->id);
        return response()->json([], 204);
    }
}

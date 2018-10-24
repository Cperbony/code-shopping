<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Common\OnlyTrashed;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Filters\ChatGroupFilter;
use CodeShopping\Http\Requests\ChatGroupCreateRequest;
use CodeShopping\Http\Requests\ChatGroupUpdateRequest;
use CodeShopping\Http\Resources\ChatGroupResource;
use CodeShopping\Models\ChatGroup;
use CodeShopping\Models\User;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class ChatGroupController extends Controller
{
    use OnlyTrashed;

    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
//        $chat_groups = ChatGroup::withCount('users')->paginate();
//        return ChatGroupResource::collection($chat_groups);

        $filter = app(ChatGroupFilter::class);
        $query = ChatGroup::query();
        $query = $this->onlyTrashedIfRequested($request, $query);
        $filterQuery = $query->filtered($filter);
        $chat_groups = $filter->hasFilterParameter() ?
            $filterQuery->get() :
            $chat_groups = ChatGroup::withCount('users')->paginate(10);
        return ChatGroupResource::collection($chat_groups);
    }

    /**
     * @param ChatGroupCreateRequest $request
     * @return ChatGroupResource
     */
    public function store(ChatGroupCreateRequest $request)
    {
        try {
            $chatGroup = ChatGroup::createWithPhoto($request->all());
        } catch (\Exception $e) {
        }
        return new ChatGroupResource($chatGroup);
    }

    public function show(ChatGroup $chat_group)
    {
        return new ChatGroupResource($chat_group);
    }

    public function update(ChatGroupUpdateRequest $request, ChatGroup $chat_group)
    {
        try {
            $chat_group->updateWithPhoto($request->all());
        } catch (\Exception $e) {
        }
        return new ChatGroupResource($chat_group);
    }

    public function destroy(ChatGroup $chat_group)
    {
        try {
            $chat_group->delete();
        } catch (\Exception $e) {
        }
        return response()->json([], 204);
    }
}

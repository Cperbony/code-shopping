<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Events\UserCreatedEvent;
use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Filters\UserFilter;
use CodeShopping\Http\Requests\UserRequest;
use CodeShopping\Http\Resources\UserResource;
use CodeShopping\Models\User;
use CodeShopping\Common\OnlyTrashed;
use Illuminate\Http\Request;


class UserController extends Controller
{
    use OnlyTrashed;

    /**
     * @param Request $request
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index(Request $request)
    {
        $filter = app(UserFilter::class);
        $query = User::query();
        $query = $this->onlyTrashedIfRequested($request, $query);
        $filterQuery = $query->filtered($filter);
        $users = $filter->hasFilterParameter() ?
            $filterQuery->get() :
            $filterQuery->paginate(10);
        return UserResource::collection($users);
    }

    /**
     * @param UserRequest $request
     * @return UserResource
     */
    public function store(UserRequest $request)
    {
        $user = User::create($request->all());
        event(new UserCreatedEvent($user));
        return new UserResource($user);
    }

    /**
     * @param User $user
     * @return UserResource
     */
    public function show(User $user)
    {
        return new UserResource($user);
    }

    /**
     * @param UserRequest $request
     * @param User $user
     * @return UserResource
     */
    public function update(UserRequest $request, User $user)
    {
        $user->fill($request->all());
        $user->save();
        return new UserResource($user);
    }

    /**
     * @param User $user
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy(User $user)
    {
        $user->delete();
        return response()->json([], 204);
    }
}

<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductInputRequest;
use CodeShopping\Http\Resources\ProductInputResource;
use CodeShopping\Models\ProductInput;

class ProductInputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $inputs = ProductInput::with('product')->paginate(); //eager loading
        return ProductInputResource::collection($inputs);
//        return new ProductInputResource($product);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductInputRequest $request
     * @return ProductInputResource
     */
    public function store(ProductInputRequest $request)
    {
        $input = ProductInput::create($request->all());
        return new ProductInputResource($input);
    }

    /**
     * Display the specified resource.
     *
     * @param ProductInput $input
     * @return ProductInputResource
     */
    public function show(ProductInput $input)
    {
        return new ProductInputResource($input);
    }
}

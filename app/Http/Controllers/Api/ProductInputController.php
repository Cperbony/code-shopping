<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Filters\ProductInputFilter;
use CodeShopping\Http\Requests\ProductInputsRequest;
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
        $filter = app(ProductInputFilter::class);
        $filterQuery = ProductInput::with('product')->filtered($filter);
        $inputs = $filterQuery->paginate(); //eager loading
        return ProductInputResource::collection($inputs);
//        return new ProductInputResource($product);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductInputsRequest $request
     * @return ProductInputResource
     */
    public function store(ProductInputsRequest $request)
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

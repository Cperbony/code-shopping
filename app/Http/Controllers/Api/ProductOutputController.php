<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductOutputRequest;
use CodeShopping\Http\Resources\ProductOutputResource;
use CodeShopping\Models\ProductOutput;

class ProductOutputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Resources\Json\AnonymousResourceCollection
     */
    public function index()
    {
        $outputs = ProductOutput::with('product')->paginate(); //eager loading
        return ProductOutputResource::collection($outputs);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductOutputRequest $request
     * @return ProductOutputResource
     */
    public function store(ProductOutputRequest $request)
    {
        $output = ProductOutput::create($request->all());
        return new ProductOutputResource($output);
    }

    /**
     * Display the specified resource.
     *
     * @param ProductOutput $output
     * @return ProductOutputResource
     */
    public function show(ProductOutput $output)
    {
        return new ProductOutputResource($output);
    }
}

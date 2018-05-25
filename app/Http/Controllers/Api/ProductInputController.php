<?php

namespace CodeShopping\Http\Controllers;

use CodeShopping\Http\Resources\ProductInputResource;
use CodeShopping\Models\Product;
use CodeShopping\Models\ProductInput;
use Illuminate\Http\Request;

class ProductInputController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param Product $product
     * @return ProductInputResource
     */
    public function index(Product $product)
    {
        return new ProductInputResource($product);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \CodeShopping\Models\ProductInput  $productInput
     * @return \Illuminate\Http\Response
     */
    public function show(ProductInput $productInput)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \CodeShopping\Models\ProductInput  $productInput
     * @return \Illuminate\Http\Response
     */
    public function edit(ProductInput $productInput)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \CodeShopping\Models\ProductInput  $productInput
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ProductInput $productInput)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     * @param  \CodeShopping\Models\ProductInput $productInput
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product, ProductInput $productInput)
    {
        $productInput->products()->detach($product->id);
        return response()->json([], 204);
    }
}

<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductRequest;
use CodeShopping\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Product[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Product::all();
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
     * @param ProductRequest $request
     * @return Product|\Illuminate\Database\Eloquent\Model
     */
    public function store(ProductRequest $request)
    {
        $product = Product::create($request->all());
        $product->refresh();
        return $product;
    }

    /**
     * Display the specified resource.
     *
     * @param  \CodeShopping\Models\Product $product
     * @return Product
     */
    public function show(Product $product)
    {
        return $product;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \CodeShopping\Models\Product $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param  \CodeShopping\Models\Product $product
     * @return Product
     */
    public function update(ProductRequest $request, Product $product)
    {
        $product->fill($request->all());
        $product->save();

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \CodeShopping\Models\Product $product
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Product $product)
    {
        $product->delete();

        return response([], 204);
    }
}

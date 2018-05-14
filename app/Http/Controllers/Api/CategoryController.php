<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\CategoryRequest;
use CodeShopping\Models\Category;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Category[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param CategoryRequest $request
     * @return Category|\Illuminate\Database\Eloquent\Model
     */
    public function store(CategoryRequest $request)
    {
        $category = Category::create($request->all());
        $category->refresh();
        return $category;
    }

    /**
     * Display the specified resource.
     *
     * @param  \CodeShopping\Models\Category $category
     * @return Category
     */
    public function show(Category $category)
    {
        return $category;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param CategoryRequest $request
     * @param  \CodeShopping\Models\Category $category
     * @return Category
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $category->fill($request->all());
        $category->save();

//        return $category;
        return response([], 204);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \CodeShopping\Models\Category $category
     * @return \Illuminate\Http\Response
     * @throws \Exception
     */
    public function destroy(Category $category)
    {
        $category->delete();

        return response([], 204);
    }
}

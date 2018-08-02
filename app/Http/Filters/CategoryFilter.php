<?php

namespace CodeShopping\Http\Filters;

use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

/**
 * Created by PhpStorm.
 * User: Claus Perbony
 * Date: 02/08/2018
 * Time: 10:14
 */
class CategoryFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];

    protected $simpleSorts = ['id', 'name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query->where('name', 'LIKE', "%$value%")
        ->orWhere('description', 'LIKE', "%$value%");
    }
}
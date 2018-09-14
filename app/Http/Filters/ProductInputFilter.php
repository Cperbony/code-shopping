<?php

namespace CodeShopping\Http\Filters;

use Illuminate\Database\Eloquent\Builder;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

/**
 * Created by PhpStorm.
 * User: Claus Perbony
 * Date: 02/08/2018
 * Time: 10:14
 */
class ProductInputFilter extends SimpleQueryFilter
{
    protected $simpleFilters = ['search'];

    protected $simpleSorts = ['id', 'product_name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query->where('name', 'LIKE', "%$value%");
    }

    protected function applySortProductName($order)
    {
        $this->query->orderBy('name', $order);
    }

    protected function applySortCreatedAt($order)
    {
        $this->query->orderBy('product_inputs.created_at', $order);
    }

    /**
     * @param Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function apply($query)
    {
        $query = $query
            ->select('product_inputs.*')
            ->join('products', 'products.id', '=', 'product_inputs.product_id');
        return parent::apply($query);
    }
}

//SELECT * FROM products_inputs JOIN products ON products.id = products_inputs.products_id
//Retorna id -> products_inputs = id -> product
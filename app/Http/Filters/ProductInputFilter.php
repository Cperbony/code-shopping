<?php

namespace CodeShopping\Http\Filters;

use CodeShopping\Common\QueryCommonRangeFilter;
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
    use QueryCommonRangeFilter;

    protected $simpleFilters = ['search', 'interval'];

    protected $simpleSorts = ['id', 'product_name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query->where('products.name', 'LIKE', "%$value%");
    }

    protected function applyInterval($value)
    {
        $this->query = $this->intervalRangeFilter($this->query, 'product_inputs.created_at', $value);
    }

    protected function applySortProductName($order)
    {
        $this->query->orderBy('products.name', $order);
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
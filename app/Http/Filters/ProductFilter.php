<?php

namespace CodeShopping\Http\Filters;

use CodeShopping\Common\QueryCommonRangeFilter;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

/**
 * Created by PhpStorm.
 * User: Claus Perbony
 * Date: 02/08/2018
 * Time: 10:14
 */
class ProductFilter extends SimpleQueryFilter
{
    use QueryCommonRangeFilter;

    protected $simpleFilters = ['search', 'interval', 'price'];

    protected $simpleSorts = ['id', 'name', 'price', 'stock', 'created_at'];

    protected function applySearch($value)
    {
        $this->query
            ->where('name', 'LIKE', "%$value%")
            ->orWhere('description', 'LIKE', "%$value%");
    }

    protected function applyPrice($value){
        $this->query = $this->intervalRangeFilter($this->query, 'price', $value);
    }

    protected function applyInterval($value)
    {
        $this->query = $this->intervalRangeFilter($this->query, 'created_at', $value);
    }

    public function hasFilterParameter()
    {
        $contains = $this->parser->getFilters()->contains(function ($filter) {
            return $filter->getField() === 'search' && !empty($filter->getValue());
        });
        return $contains;
    }
}
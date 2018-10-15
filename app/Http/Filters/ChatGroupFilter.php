<?php

namespace CodeShopping\Http\Filters;

use CodeShopping\Common\QueryCommonRangeFilter;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;

class ChatGroupFilter extends SimpleQueryFilter
{
    use QueryCommonRangeFilter;

    protected $simpleFilters = ['search', 'interval', 'price'];

    protected $simpleSorts = ['id', 'name', 'photo', 'created_at'];

    protected function applySearch($value)
    {
        $this->query
            ->where('name', 'LIKE', "%$value%");
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
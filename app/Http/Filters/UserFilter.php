<?php

namespace CodeShopping\Http\Filters;

use CodeShopping\Common\QueryCommonRangeFilter;
use CodeShopping\Models\User;
use Mnabialek\LaravelEloquentFilter\Filters\SimpleQueryFilter;


class UserFilter extends SimpleQueryFilter
{
    use QueryCommonRangeFilter;

    protected $simpleFilters = ['search', 'role'];

    protected $simpleSorts = ['id', 'email', 'name', 'created_at'];

    protected function applySearch($value)
    {
        $this->query
            ->where('name', 'LIKE', "%$value%")
            ->orWhere('email', 'LIKE', "%$value%");
    }

    protected function applyRole($value){
        $role = $value == 'customer' ? User::ROLE_CUSTOMER : User::ROLE_SELLER;
        $this->query->where('role', $role);
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
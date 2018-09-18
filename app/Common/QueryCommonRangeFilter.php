<?php
/**
 * Created by PhpStorm.
 * User: Claus Perbony
 * Date: 14/09/2018
 * Time: 15:06
 */

namespace CodeShopping\Common;

use Illuminate\Database\Eloquent\Builder;

trait QueryCommonRangeFilter
{

    /**
     * @param Builder $query
     * @param $field
     * @param $value
     * @return Builder
     */
    protected function intervalRangeFilter(Builder $query, $field, $value)
    {
        $value = explode('|', $value);
        $valueGreaterThanZero = $query->where($field, '>=', $value[0]);
        $valueGreaterThanOne = $query->where($field, '<=', $value[1]);
        if (count($value) > 0) {
            $this->$valueGreaterThanZero;
        }
        if (count($value) > 1) {
            $this->$valueGreaterThanOne;
        }
        return $query;
    }
}
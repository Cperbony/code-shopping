<?php

namespace CodeShopping\Common;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;


trait OnlyTrashed
{
    /**
     * @param Request $request
     * @param Builder $query
     * @return Builder
     */
    protected function onlyTrashedIfRequested(Request $request, Builder $query)
    {
        if ($request->get('trashed') == 1) {
            $query = $query->onlyTrashed();
        }
        return $query;
    }
}
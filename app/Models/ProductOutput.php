<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;
use Mnabialek\LaravelEloquentFilter\Traits\Filterable;

class ProductOutput extends Model
{
    use Filterable;

    protected $fillable = [
        'amount',
        'product_id',
    ];

    //Many to One, Toda entrada se refere a um produto
    public function product()
    {
        return $this->belongsTo(Product::class)->withTrashed();
    }
}

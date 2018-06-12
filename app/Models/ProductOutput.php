<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;

class ProductOutput extends Model
{
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

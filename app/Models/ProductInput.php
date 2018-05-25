<?php

namespace CodeShopping\Models;

use Illuminate\Database\Eloquent\Model;

class ProductInput extends Model
{
    protected $fillable = ['amount'];

    public function products(){
        return $this->belongsTo(Product::class);
    }
}

<?php

namespace CodeShopping\Http\Resources;

use CodeShopping\Models\Product;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductPhotoCollection extends ResourceCollection
{
    /**
     * @var Product
     */
    private $product;

    public function __construct($resource, Product $product)
    {

        $this->product = $product;
        parent::__construct($resource);
    }

    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
          'product' => new ProductResource($this->product),
          'photos' => $this->collection->map(function($photo){
              return new ProductPhotoResource($photo, true);
          })
        ];
    }
}

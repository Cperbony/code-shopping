<?php

namespace CodeShopping\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Collection;

class ProductPhotoResource extends JsonResource
{
    private $isCollection;

    /**
     * ProductPhotoResource constructor.
     * @param $resource
     * @param $isCollection
     */
    public function __construct($resource, $isCollection = false)
    {
        parent::__construct($resource);
        $this->isCollection = $isCollection;
    }

    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
        $data = [
            'id' => $this->id,
            'photo_url' => $this->photo_url,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
//            'product' => new ProductResource($this->product),
        ];
        if (!$this->isCollection) {
            $data['product'] = new ProductResource($this->product);
        }
        return $data;
    }
}

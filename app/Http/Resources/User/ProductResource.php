<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "stock" => $this->stock,
            "price" => $this->price,
            "description" => $this->description,
            "get_images" => json_decode($this->images),            
            "get_human_updated_at" => $this->get_human_updated_at,
            "reviews" => $this->reviews ? new ReviewCollection($this->reviews) : Null
        ];
    }
}

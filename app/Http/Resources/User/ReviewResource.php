<?php

namespace App\Http\Resources\User;

use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
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
            'id' => $this->id,            
            'get_human_created_at' => $this->get_human_created_at,
            'description' => $this->description,
            'user' => $this->user ? new UserResource($this->user) : Null
        ];
    }
}

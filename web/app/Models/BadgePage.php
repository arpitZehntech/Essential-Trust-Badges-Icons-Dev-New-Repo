<?php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

// class BadgePage extends Model
// {
//     use HasFactory;

//     // Define which fields are mass assignable
//     protected $fillable = [
//         'badge_id',
//         'title',
//         'subheading',
//         'icon_name',
//         'call_to_action',
//         'button_text',
//         'product_id',
//         'product_json',
//         'collection_id',
//         'collection_json',
//         'external_url',
//     ];
    

//     // Define the relationship: A BadgePage belongs to a Badge
//     public function badge()
//     {
//         return $this->belongsTo(Badge::class, 'badge_id');
//     }
    
// }

// NEW CODE  but old code from gpt 7/11/2024 before this above is working code


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BadgePage extends Model
{
    use HasFactory;

    protected $fillable = [
        'badge_id',
        'title',
        'subheading',
        'icon_name',
        'icon_svg', // Add this line
        'call_to_action',
        'button_text',
        'product_id',
        'product_json',
        'collection_id',
        'collection_json',
        'external_url',
        'placement_product_type',
        'placement_product_json',
        'placement_collection_json',
        'placement_tags_json',
    ];

    public function badge()
    {
        return $this->belongsTo(Badge::class, 'badge_id');
    }
}
<?php


//   working code at 16-11-2024 


// namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

// class BadgePage extends Model
// {
//     use HasFactory;

//     protected $fillable = [
//         'badge_id',
//         'title',
//         'subheading',
//         'icon_name',
//         'icon_svg', 
//         'call_to_action',
//         'button_text',
//         'product_json',
//         'collection_json',
//         'external_url',
//         'placement_product_type',
//         'placement_product_json',
//         'placement_collection_json',
//         'placement_tags_json',
//     ];

//     public function badge()
//     {
//         return $this->belongsTo(Badge::class, 'badge_id');
//     }
// }


// working code 16-11-2024  adding comments 

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BadgePage extends Model
{
    use HasFactory; // Use the HasFactory trait to enable factory support

    // Define which fields are mass assignable
    protected $fillable = [
        'badge_id',           // The ID of the associated badge
        'title',              // The title of the badge page
        'subheading',         // The subheading of the badge page
        'icon_name',          // The name of the icon
        'icon_svg',           // The SVG content of the icon
        'call_to_action',     // The call-to-action text
        'button_text',        // The text for the button
        'product_json',       // JSON data related to products
        'collection_json',    // JSON data related to collections
        'external_url',       // An external URL
        'placement_product_type', // The type of product placement
        'placement_product_json', // JSON data related to product placement
        'placement_collection_json', // JSON data related to collection placement
        'placement_tags_json',     // JSON data related to tag placement
    ];

    /**
     * Define the relationship: A BadgePage belongs to a Badge.
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function badge()
    {
        return $this->belongsTo(Badge::class, 'badge_id'); // Define a many-to-one relationship with the Badge model
    }
}

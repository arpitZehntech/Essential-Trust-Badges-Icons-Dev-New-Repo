<?php

// //   working code at 16-11-2024 

// namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;

// class Badge extends Model
// {
//     use HasFactory;

//     // Define which fields are mass assignable
//     protected $fillable = [
//         'badge_name',
//         'badge_type',
//         'status',
//         'shop',
//     ];

//     // Define the relationship: A Badge has many BadgePages

//     public function badgePages()
//     {
//         return $this->hasMany(BadgePage::class, 'badge_id');
//     } 

// }


// working code 16-11-2024  adding comments 


namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Badge extends Model
{
    use HasFactory; // Use the HasFactory trait to enable factory support

    // Define which fields are mass assignable
    protected $fillable = [
        'badge_name', // The name of the badge
        'badge_type', // The type of the badge
        'status',     // The status of the badge (e.g., Draft, Publish)
        'shop',       // The shop associated with the badge

        'background_color',
        'border_color',
        'title_color',
        'subheading_color',
        'icon_color',
        'corner_radius',
        'border_size',
        'title_size',
        'subheading_size',
        'icon_size',
        'button_color',
        'button_text_color',
        'button_border_radius',
        'button_text_size',
    ];

    /**
     * Define the relationship: A Badge has many BadgePages.
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function badgePages()
    {
        return $this->hasMany(BadgePage::class, 'badge_id'); // Define a one-to-many relationship with the BadgePage model
    }
}

<?php

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreateBadgePagesTable extends Migration
// {
//     /**
//      * Run the migrations.
//      *
//      * @return void
//      */
//     public function up()
//     {
//         Schema::create('badge_pages', function (Blueprint $table) {
//             $table->id(); // Auto-incrementing primary key
//             $table->foreignId('badge_id')->constrained('badges')->onDelete('cascade'); // Foreign key
//             $table->string('title')->nullable(); // Title of the page
//             $table->string('subheading')->nullable(); // Subheading of the page
//             $table->string('icon_name')->nullable(); // Icon for the page
//             $table->enum('call_to_action', ['No Call To Action', 'Button', 'Whole Banner Clickable'])->default('No Call To Action'); // Action type
//             $table->string('button_text')->nullable(); // Button text
//             $table->unsignedBigInteger('product_id')->nullable(); // Optional product ID
//             $table->unsignedBigInteger('collection_id')->nullable(); // Optional collection ID
//             $table->string('external_url')->nullable(); // External URL
//             $table->enum('status', ['Draft', 'Publish'])->default('Draft'); // Status
//             $table->json('product_json')->nullable(); // Icon for the page
//             $table->json('collection_json')->nullable(); // Icon for the page

//             $table->timestamps(); // created_at and updated_at timestamps
//         });
//     }
    

//     /**
//      * Reverse the migrations.
//      *
//      * @return void
//      */
//     public function down()
//     {
//         Schema::dropIfExists('badge_pages');
//     }
// }



// working code 16-11-2024


// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreateBadgePagesTable extends Migration
// {
//     /**
//      * Run the migrations.
//      *
//      * @return void
//      */
//     public function up()
//     {
//         Schema::create('badge_pages', function (Blueprint $table) {
//             $table->id(); // Auto-incrementing primary key
//             $table->foreignId('badge_id')->constrained('badges')->onDelete('cascade'); // Foreign key
//             $table->string('title')->nullable(); // Title of the page
//             $table->string('subheading')->nullable(); // Subheading of the page
//             $table->string('icon_name')->nullable(); // Icon for the page
//             $table->text('icon_svg')->nullable(); // Icon Svg for the page
//             $table->enum('call_to_action', ['no-cta,button-cta,clickable-banner-cta'])->default('no-cta'); // Action type
//             $table->string('button_text')->nullable(); // Button text
//             $table->unsignedBigInteger('product_id')->nullable(); // Optional product ID
//             $table->unsignedBigInteger('collection_id')->nullable(); // Optional collection ID
//             $table->string('external_url')->nullable(); // External URL
//             $table->enum('status', ['Draft', 'Publish'])->default('Draft'); // Status
//             $table->json('product_json')->nullable(); // Product JSON data
//             $table->json('collection_json')->nullable(); // Collection JSON data
//             $table->string('placement_product_type')->nullable(); // Placement product type
//             $table->json('placement_product_json')->nullable(); // Placement product JSON data
//             $table->json('placement_collection_json')->nullable(); // Placement collection JSON data
//             // $table->json('placement_tags_json')->nullable(); // Placement tags JSON data
//             $table->text('placement_tags_json')->nullable(); // Placement tags JSON data (changed to text)
//             $table->timestamps(); // created_at and updated_at timestamps
//         });
//     }

//     /**
//      * Reverse the migrations.
//      *
//      * @return void
//      */
//     public function down()
//     {
//         Schema::dropIfExists('badge_pages');
//     }
// }



// working code 16-11-2024  adding comments 

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBadgePagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('badge_pages', function (Blueprint $table) {
            $table->id(); // Auto-incrementing primary key
            $table->foreignId('badge_id')->constrained('badges')->onDelete('cascade'); // Foreign key referencing the 'badges' table
            $table->string('title')->nullable(); // Title of the page (nullable)
            $table->string('subheading')->nullable(); // Subheading of the page (nullable)
            $table->string('icon_name')->nullable(); // Icon name for the page (nullable)
            $table->text('icon_svg')->nullable(); // Icon SVG content for the page (nullable)
            $table->enum('call_to_action', ['no-cta', 'button-cta', 'clickable-banner-cta'])->default('no-cta'); // Call-to-action type (enum with predefined values, default is 'no-cta')
            $table->string('button_text')->nullable(); // Button text (nullable)
            $table->unsignedBigInteger('product_id')->nullable(); // Optional product ID (nullable)
            $table->unsignedBigInteger('collection_id')->nullable(); // Optional collection ID (nullable)
            $table->string('external_url')->nullable(); // External URL (nullable)
            $table->enum('status', ['Draft', 'Publish'])->default('Draft'); // Status (enum with predefined values, default is 'Draft')
            $table->json('product_json')->nullable(); // Product JSON data (nullable)
            $table->json('collection_json')->nullable(); // Collection JSON data (nullable)
            $table->string('placement_product_type')->nullable(); // Placement product type (nullable)
            $table->json('placement_product_json')->nullable(); // Placement product JSON data (nullable)
            $table->json('placement_collection_json')->nullable(); // Placement collection JSON data (nullable)
            $table->text('placement_tags_json')->nullable(); // Placement tags Text data (nullable)
            $table->timestamps(); // created_at and updated_at timestamps
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('badge_pages'); // Drop the 'badge_pages' table if it exists
    }
}

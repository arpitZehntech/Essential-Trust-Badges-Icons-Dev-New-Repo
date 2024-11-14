<?php

// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreateBadgesTable extends Migration
// {
//     /**
//      * Run the migrations.
//      *
//      * @return void
//      */

//         public function up()
//     {
//         Schema::create('badges', function (Blueprint $table) {
//             $table->id();  // This creates an auto-incrementing BIGINT UNSIGNED primary key
//             $table->string('badge_name'); // Name of the badge
//             $table->enum('badge_type', ['Single Banner', 'Icon Block', 'Payment Icons']); // Badge type
//             $table->enum('status', ['Draft', 'Publish'])->default('Draft'); // Status
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
//         Schema::dropIfExists('badges');
//     }
// }


// NEW CODE  but old code from gpt 8/11/2024 before this above is working code


// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreateBadgesTable extends Migration
// {
//     /**
//      * Run the migrations.
//      *
//      * @return void
//      */
//     public function up()
//     {
//         Schema::create('badges', function (Blueprint $table) {
//             $table->id();  // This creates an auto-incrementing BIGINT UNSIGNED primary key
//             $table->string('shop')->nullable(); // Name of the badge
//             $table->bigInteger('user_id')->unsigned(); // Unsigned BIGINT type for user_id

//             $table->string('badge_name'); // Name of the badge
//             $table->enum('badge_type', ['single-banner', 'icon-block', 'payment-icons']); // Badge type
//             $table->enum('status', ['Draft', 'Publish'])->default('Draft'); // Status
            
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
//         Schema::dropIfExists('badges');
//     }
// }


// use Illuminate\Database\Migrations\Migration;
// use Illuminate\Database\Schema\Blueprint;
// use Illuminate\Support\Facades\Schema;

// class CreateBadgesTable extends Migration
// {
//     /**
//      * Run the migrations.
//      *
//      * @return void
//      */
//     public function up()
//     {
//         Schema::create('badges', function (Blueprint $table) {
//             $table->id(); // Auto-incrementing BIGINT UNSIGNED primary key
//             $table->string('shop')->nullable(); // Shop name
//             $table->bigInteger('user_id')->unsigned(); // Foreign key to sessions table (unsigned BIGINT)
//             $table->string('badge_name'); // Name of the badge
//             $table->enum('badge_type', ['single-banner', 'icon-block', 'payment-icons']); // Badge type
//             $table->enum('status', ['Draft', 'Publish'])->default('Draft'); // Status

//             $table->timestamps(); // created_at and updated_at timestamps

//             // Foreign key constraint
//             $table->foreign('user_id')->references('id')->on('sessions')->onDelete('cascade');
//         });
//     }

//     /**
//      * Reverse the migrations.
//      *
//      * @return void
//      */
//     public function down()
//     {
//         Schema::table('badges', function (Blueprint $table) {
//             // Drop the foreign key first before dropping the table
//             $table->dropForeign(['user_id']);
//         });
//         Schema::dropIfExists('badges');
//     }
// }


use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBadgesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('badges', function (Blueprint $table) {
            $table->id(); // Auto-incrementing BIGINT UNSIGNED primary key
            $table->foreign('shop')->references('shop')->on('sessions')->onDelete('cascade');
            $table->string('badge_name'); // Name of the badge
            $table->enum('badge_type', ['single-banner', 'icon-block', 'payment-icons']); // Badge type
            $table->enum('status', ['Draft', 'Publish'])->default('Draft'); // Status

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
        Schema::table('badges', function (Blueprint $table) {
            // Drop the foreign keys before dropping the table
            $table->dropForeign(['user_id']);
            $table->dropForeign(['shop']);
        });
        Schema::dropIfExists('badges');
    }
}

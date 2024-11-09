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
            $table->id();  // This creates an auto-incrementing BIGINT UNSIGNED primary key
            $table->string('badge_name'); // Name of the badge
            $table->enum('badge_type', ['Single Banner', 'Icon Block', 'Payment Icons']); // Badge type
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
        Schema::dropIfExists('badges');
    }
}

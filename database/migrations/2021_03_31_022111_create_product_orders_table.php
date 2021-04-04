<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("order_id")->unsigned();
            $table->bigInteger("user_id")->unsigned();
            $table->bigInteger("product_id")->unsigned();
            $table->bigInteger("price")->default(0);
            $table->bigInteger("quantity")->default(1);
            $table->bigInteger("sub_total")->default(0);
            $table->timestamps();

            $table->foreign("order_id")
              ->references("id")
              ->on("orders"); 

            $table->foreign("user_id")
              ->references("id")
              ->on("users"); 

            $table->foreign("product_id")
              ->references("id")
              ->on("products"); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_orders');
    }
}

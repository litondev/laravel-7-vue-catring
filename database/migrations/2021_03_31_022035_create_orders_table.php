<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->bigInteger("user_id")->unsigned();
            $table->bigInteger("total")->default(0);
            $table->enum("status",["pending"])->default("pending");
            $table->timestamp("date")->nullable();
            $table->text("address");
            $table->string("phone",25);
            $table->timestamp("expired_payment")->nullable();
            $table->enum("status_payment",["paid","expired","unpaid"])->default("unpaid");
            $table->timestamps();

            $table->foreign("user_id")
              ->references("id")
              ->on("users"); 
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}

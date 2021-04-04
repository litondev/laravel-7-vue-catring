<?php

use Illuminate\Database\Seeder;
use App\Models\{
	User,
	Cart,
	ManualPayment,
	Notification,
	Order,
	Product,
	ProductOrder,
	Review,
	Setting
};

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Setting::create([
        	"name" => "site_name",
        	"value" => "testing"
        ]);

        User::create([
    		"username" => "admin",
    		"email" => "admin@admin.com",
    		"password" => \Hash::make("12345678"),
    		"phone" => "0897654321221",
    		"role" => "admin"
    	]);

    	User::create([
    		"username" => "user",
    		"email" => "user@user.com",
    		"password" => \Hash::make("12345678"),
    		"phone" => "0897654321222",
    	]);

    	for($i=0;$i<50;$i++){
        	User::create([
        		"username" => "user".$i,
        		"email" => "user".$i."@user.com",
        		"password" => \Hash::make("12345678"),
    			"phone" => "089765432122".($i*10)
        	]);
        }

       $imgs = ["img1.png","img2.png","img3.png","img4.png","img5.png","img6.png"];

       for($i=0;$i<100;$i++){
       	  Product::create([
       	  	"name" => "Product 1 ".$i,     
       	  	"stock" => 100,       	  	
       	  	"description" => "<p>Des</p>",       	 
       	  	"price" => rand(10000,100000),
       	  	"images" => json_encode([$imgs[rand(0,5)],$imgs[rand(0,5)],$imgs[rand(0,5)]])
       	  ]);
       }
    }
}

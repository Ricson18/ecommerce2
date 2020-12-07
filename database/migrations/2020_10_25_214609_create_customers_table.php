<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('fname');
            $table->string('lname');
            $table->string('image')->nullable();

            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            // $table->rememberToken();
            
            $table->string('city');
            $table->string('state');
            $table->string('zip');
            $table->string('country');
            $table->string('phone');
            // $table->string('emailVerified');
            $table->string('verificationCode')->nullable();
            $table->string('userIp')->nullable();
            $table->text('address1');
            $table->text('address2')->nullable();
            $table->string('billingCity')->nullable();
            $table->string('billingCountry')->nullable();
            $table->text('billingAddress1')->nullable();
            $table->text('billingAddress2')->nullable();
            $table->string('billingPostalCode')->nullable();
            $table->string('billingEmail')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('customers');
    }
}

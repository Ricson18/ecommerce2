<?php

namespace Database\Factories;

use App\Models\OrderDetail;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrderDetailFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = OrderDetail::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'qtyOrdered'=>$this->faker->randomDigit,
            'amount'=>$this->faker->randomFloat,
            'product_id'=>\App\Models\Product::factory(),
            'order_id'=>\App\Models\Order::factory(),
        ];
    }
}

<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'category_id'=>\App\Models\Category::factory(),
            'name'=>$this->faker->name,
            'price'=>$this->faker->randomFloat,
            'shortDesc'=>$this->faker->text,
            'desc'=>$this->faker->text,
            'image'=>$this->faker->image,
            'thumbnail'=>$this->faker->image,
            'stock'=>'in stock',
            'quantity'=>$this->faker->randomDigit,
            'slug'=>$this->faker->url,
        ];
    }
}

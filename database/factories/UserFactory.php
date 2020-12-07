<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // 'name' => $this->faker->name,
            'fname' => $this->faker->firstname,
            'lname' => $this->faker->lastname,
            'isAdmin' => $this->faker->boolean,
            'phone' => $this->faker->phoneNumber,
            'city' => $this->faker->city,
            'state' => $this->faker->state,
            'country' => $this->faker->country,
            'image' => $this->faker->image,
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
            
            // 'dob' => $this->faker->word,
            'dob' => $this->faker->dateTimeThisCentury->format('Y-m-d'),
            'gender'=>$this->faker->randomElement(['Male','Female']),
            // 'status'=>$this->faker->randomElement(['Active','Female']),
            'role'=>$this->faker->randomElement(['Staff','Admin']),
            // 'is_verified'=>$this->faker->randomElement(['Male','Female']),
        ];
    }
}

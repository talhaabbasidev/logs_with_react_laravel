<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class NotificationFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => $this->faker->sentence,
            'status' => $this->faker->randomElement([
                'Pending',
                'Completed',
                'In Progress'
            ]),
            'date' => $this->faker->dateTimeBetween('-1 month', 'now'),
        ];
    }
}
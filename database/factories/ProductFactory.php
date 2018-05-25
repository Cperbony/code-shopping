<?php

use Faker\Generator as Faker;

$factory->define(CodeShopping\Models\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->linuxProcessor,
        'description' => $faker->text(400),
        'price' => $faker->randomFloat(2, 10, 100),
        'stock' => $faker->randomDigit(0, 1),
        'active' => $faker->boolean(),
    ];
});

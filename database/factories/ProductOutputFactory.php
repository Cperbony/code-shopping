<?php

use Faker\Generator as Faker;

/** @var \Faker\Factory $factory */
$factory->define(CodeShopping\Models\ProductOutput::class, function (Faker $faker) {
    return [
        'amount' => $faker->numberBetween(1, 3),
    ];
});

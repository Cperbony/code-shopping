<?php

use CodeShopping\Models\Product;
use CodeShopping\Models\ProductInput;
use Illuminate\Database\Seeder;

class ProductInputTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    public function run()
    {
        $products = Product::all();
        factory(ProductInput::class, 30)
            ->create()
            ->each(function ($productInputs) use ($products) {
                $productId = $products->random()->id;
                $productInputs->produtos()->attach($productId);
            });
    }
}

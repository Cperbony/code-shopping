<?php

use CodeShopping\Models\Category;
use CodeShopping\Models\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** @var \Illuminate\Database\Eloquent\Collection $categories */
        $categories = Category::all();
        factory(Product::class, 30)
            ->create()
            ->each(function ($product) use ($categories) {
                $categoryId = $categories->random()->id;
                $product->categories()->attach($categoryId);
        });
    }
}

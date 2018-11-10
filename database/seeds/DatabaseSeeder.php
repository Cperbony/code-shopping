<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(ProductInputsTableSeeder::class);
        $this->call(ProductOutputsTableSeeder::class);
        $this->call(ProductPhotosTableSeeder::class);
        $this->call(ChatGroupsTableSeeder::class);
        $this->call(ChatMessagesFbSeeder::class);
        $this->call(ChatMessagesLargerFbSeeder::class);
    }
}

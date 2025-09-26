<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class TestUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        User::updateOrCreate(
            ['email' => 'testuser@gmail.com'],
            [
                'name' => 'Test User',
                'email' => 'testuser@gmail.com',
                'password' => Hash::make('password123'),
                'email_verified_at' => now()
            ]
        );
    }
}

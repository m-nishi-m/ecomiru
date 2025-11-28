<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class IngredientsHealthScoreSeeder extends Seeder
{
    public function run(): void
    {
        $ingredients = [
            ['name' => '生乳', 'health_score' => 2],
            ['name' => '乳製品', 'health_score' => 2],
            ['name' => '砂糖', 'health_score' => 1],
            ['name' => '全卵', 'health_score' => 2],
            ['name' => '卵黄', 'health_score' => 2],
            ['name' => '卵白', 'health_score' => 2],
            ['name' => '小麦粉', 'health_score' => 1],
            ['name' => 'ココアパウダー', 'health_score' => 2],
            ['name' => 'バター加工品', 'health_score' => 1],
            ['name' => 'マーガリン', 'health_score' => -1],
            ['name' => 'ショートニング', 'health_score' => -1],
            ['name' => '植物油', 'health_score' => 1],
            ['name' => 'こめ油', 'health_score' => 1],
            ['name' => 'ココナッツ油', 'health_score' => 2],
            ['name' => 'ココナッツ粉', 'health_score' => 2],
            ['name' => 'カシューナッツ', 'health_score' => 2],
            ['name' => 'アーモンド', 'health_score' => 2],
            ['name' => 'ゼラチン', 'health_score' => 1],
            ['name' => 'トレハロース', 'health_score' => 1],
            ['name' => '増粘剤', 'health_score' => -1],
            ['name' => '乳化剤', 'health_score' => -1],
            ['name' => '香料', 'health_score' => -1],
            ['name' => 'pH調整剤', 'health_score' => -1],
            ['name' => 'メタリン酸Na', 'health_score' => -1],
            ['name' => '寒天', 'health_score' => 2],
            ['name' => '洋酒', 'health_score' => 0],
            ['name' => '酒精', 'health_score' => 0],
            ['name' => '全粉乳', 'health_score' => 1],
            ['name' => '脱脂粉乳', 'health_score' => 1],
            ['name' => '無水乳脂肪', 'health_score' => 1],
            ['name' => 'デキストリン', 'health_score' => 1],
            ['name' => '調味料（アミノ酸等）', 'health_score' => -1],
            ['name' => '着色料', 'health_score' => -1],
            ['name' => '酸化防止剤', 'health_score' => -1],
            ['name' => '酸味料', 'health_score' => -1],
            ['name' => '昆布エキス', 'health_score' => 2],
            ['name' => 'こんぶエキス', 'health_score' => 2],
            ['name' => '魚介エキス', 'health_score' => 2],
            ['name' => 'カツオ節粉末', 'health_score' => 2],
            ['name' => 'ガーリックオイル', 'health_score' => 2],
            ['name' => '植物レシチン', 'health_score' => 1],
        ];

        foreach ($ingredients as $ingredient) {
            DB::table('ingredients')->updateOrInsert(
                ['name' => $ingredient['name']],
                $ingredient
            );
        }
    }
}

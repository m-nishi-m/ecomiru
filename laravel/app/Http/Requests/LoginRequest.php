<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'email'    => 'required|email',
            'password' => 'required|min:8',
        ];
    }
    public function messages():array
    {
        return [
            'email.required'    => 'メールアドレスは必須です。',
            'email.email'       => 'メールアドレスの形式が正しくありません。',
            'password.required' => 'パスワードは必須です。',
            'password.min'      => 'パスワードは:min文字以上で入力してください。',
        ];
    }
}

import axios from 'axios';

export type UpdateProfilePayload = {
  user: {
    name?: string;
    email?: string;
    current_password?: string;
    password?: string;
    password_confirmation?: string;
  };
};

export const getCurrentUser = async (token: string) => {
  try {
    const res = await axios.get('http://localhost:8000/api/v1/profile', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.user;
  } catch (error) {
    console.error('ユーザー取得失敗', error);
    throw error;
  }
};

import axios from "axios";

type ErrorWithMessage = {
  message: string;
};

type NestedErrorWithMessage = {
  error: ErrorWithMessage;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

function isNestedErrorWithMessage(error: unknown): error is NestedErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'error' in error &&
    isErrorWithMessage((error as Record<string, unknown>).error)
  );
}

export const extractApiErrorMessage = (error: unknown, fallback: string): string => {
  if (isNestedErrorWithMessage(error)) {
    return (error as NestedErrorWithMessage).error.message;
  }

  if (isErrorWithMessage(error)) {
    return error.message;
  }

  return fallback;
};

export const loginAuth = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<{ token: string; user: { id: number; name: string; email: string } }> => {
  try {
  const response = await axios.post('http://localhost:8000/api/login', { email, password });

  const token = response.data.token; // Authorization ヘッダーではなく body から取得
  const user = response.data.user;

  if (!token) throw new Error('トークンがありません');
return { token, user };
  } catch (error) {
    console.error(error);
    throw new Error(extractApiErrorMessage(error, 'ログインに失敗しました'));
  }
};

"use server";

export const loginAction = async (username: string, password: string) => {
  const MOCK_USER = {
    username: "testuser",
    password: "password123",
  };

  if (username === MOCK_USER.username && password === MOCK_USER.password) {
    return true;
  } else {
    return false;
  }
};

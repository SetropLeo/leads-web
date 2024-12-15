"use server";

import { NextResponse } from "next/server";

export const loginAction = async (username: string, password: string) => {
  const MOCK_USER = {
    username: "testuser",
    password: "password123",
  };

  if (username === MOCK_USER.username && password === MOCK_USER.password) {
    return NextResponse.json(
      { success: true, token: generateToken() },
      { status: 200 }
    );
  }

  return NextResponse.json(
    { success: false, message: "Invalid credentials" },
    { status: 401 }
  );
};

const generateToken = () => {
  return Math.floor(Math.random() * (9999999999 - 1000000000 + 1)) + 1000000000;
};

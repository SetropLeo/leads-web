import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const MOCK_USER = {
    username: "testuser",
    password: "password123",
  };

  if (username === MOCK_USER.username && password === MOCK_USER.password) {
    return NextResponse.json({ success: true }, { status: 200 });
  } else {
    return NextResponse.json(
      { success: false, message: "Invalid credentials" },
      { status: 401 }
    );
  }
}

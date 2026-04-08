import { NextResponse } from "next/server";

let users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@email.com",
    role: "Admin",
    status: "active",
  },
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req: Request) {
  const body = await req.json();

  const newUser = {
    id: Date.now(),
    ...body,
  };

  users.push(newUser);

  return NextResponse.json(newUser);
}

export async function DELETE(req: Request) {
  const { id } = await req.json();

  users = users.filter((u) => u.id !== id);

  return NextResponse.json({ success: true });
}
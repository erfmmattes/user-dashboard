import { User } from "@/app/types/user";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("Erro ao buscar usuários");

  return res.json();
}

export async function getUserById(id: string): Promise<User | null> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}
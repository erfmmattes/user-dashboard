import Link from "next/link";
import { getUsers } from "@/app/services/userService";

export const metadata = {
  title: "Listagem de Usuários",
  description: "Gerenciamento de usuários",
};

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* HEADER */}
      <div className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-black">User Dashboard</h1>
      </div>

      {/* CONTEÚDO */}
      <div className="p-6">
        <div className="max-w-5xl mx-auto">

          {/* TITLE */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Usuários
            </h2>
            <p className="text-gray-500">
              Gerencie todos os usuários do sistema
            </p>
          </div>

          {/* LISTA */}
          <div className="grid gap-4">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white p-5 rounded-xl shadow-sm border hover:shadow-md transition flex justify-between items-center"
              >
                <div>
                  <p className="font-semibold text-gray-800">
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {user.email}
                  </p>
                </div>

                <Link
                  href={`/users/${user.id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Ver detalhes →
                </Link>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
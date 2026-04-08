import Link from "next/link";
import { getUserById } from "@/app/services/userService";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export const metadata = {
  title: "Detalhes do Usuário",
  description: "Gerenciamento de usuários",
};

export default async function UserPage({ params }: Props) {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user) {
    return <p className="p-6">Usuário não encontrado</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">

        <Link
          href="/"
          className="inline-block mb-6 text-blue-600 hover:underline"
        >
          ← Voltar
        </Link>

        {/* CARD */}
        <div className="bg-white rounded-xl shadow-sm border p-6">

          {/* HEADER */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {user.name}
            </h1>
            <p className="text-gray-500">{user.email}</p>
          </div>

          {/* INFO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500"><strong>Telefone</strong></p>
              <p className="font-medium text-gray-500">{user.phone}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500"><strong>Website</strong></p>
              <p className="font-medium text-gray-500">{user.website}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500"><strong>Empresa</strong></p>
              <p className="font-medium text-gray-500">{user.company.name}</p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500"><strong>Cidade</strong></p>
              <p className="font-medium text-gray-500">{user.address.city}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
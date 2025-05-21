import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

import Container from "@/components/Container";
import Link from "next/link";
import TicketListItem from "@/components/TicketListItem";

export default async  function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/api/auth/signin");

  return (
    <Container>
      <main className="w-full">
        <div className="flex justify-between items-center w-full mt-8">
          <h1 className="font-bold text-3xl">Chamados</h1>
          <Link className="font-medium text-base text-white bg-blue-600 px-5 py-1.5 rounded" href="/dashboard/new"> 
            Novo chamado
          </Link>
        </div>

        <table className="min-w-full mt-5">
          <thead>
            <tr className="border-b border-gray-200 text-gray-800 py-2">
              <th className="font-medium text-sm text-left py-2">CLIENTE</th>
              <th className="hidden sm:table-cell sm:font-medium sm:text-sm sm:text-center sm:py-2">DATA DO CADASTRO</th>
              <th className="font-medium text-sm text-center py-2">STATUS</th>
              <th className="font-medium text-sm text-right py-2">AÇÕES</th>
            </tr>
          </thead>
          <tbody className="">
            <TicketListItem />
            <TicketListItem />
            <TicketListItem />
            <TicketListItem />
            <TicketListItem />
            <TicketListItem />
          </tbody>
        </table>
      </main>
    </Container>
  );
};
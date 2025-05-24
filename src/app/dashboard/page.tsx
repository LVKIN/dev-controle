import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

import Container from "@/components/Container";
import TicketListItem from "@/components/TicketListItem";
import ButtonLink from "@/components/ButtonLink";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) return redirect("/api/auth/signin");

  const tickets = await prisma.ticket.findMany({
    where: {
      userId: session.user.id
    },
    include: {
      customer: true
    }
  });

  return (
    <Container>
      <main className="w-full">
        <div className="flex justify-between items-center w-full mt-8">
          <h1 className="font-bold text-3xl">Chamados</h1>
          <ButtonLink linkRedirect="/dashboard/new" label="Novo chamado" />
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
          <tbody className="w-full">
            {tickets?.map(({ id, name, status, created_at, customer }) => (
              <TicketListItem
                key={id}
                customerName={customer?.name ?? name}
                createdAt={created_at}
                status={status}
              />
            ))}
          </tbody>
        </table>
      </main>
    </Container>
  );
};
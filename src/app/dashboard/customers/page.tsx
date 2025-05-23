import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import CustomerCard from "@/components/CustomerCard";

import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function Customer()  {
    const session = await getServerSession(authOptions);

    if (!session) return redirect("/api/auth/signin");

    const customers = await prisma.customer.findMany({
        where: {
            userId: session.user.id
        }
    });
    
    return (
        <Container>
            <main className="block w-full">
                <div className="flex justify-between items-center w-full mt-8">
                    <h1 className="font-bold text-3xl">Clientes</h1>
                    <ButtonLink linkRedirect="/dashboard/customers/new" label="Novo cliente" />
                </div>

                {customers?.length ? (
                    <section className="flex flex-wrap gap-4 mt-5">
                        {customers.map(({ id, name, email, phone }) => (
                            <CustomerCard
                                key={id}
                                id={id}
                                name={name}
                                email={email}
                                phone={phone}
                            />
                        ))}
                    </section>
                ) : (
                    <p className="text-center text-lg text-gray-500 py-10">Você ainda não possui nenhum cliente cadastrado 😔</p>
                )}

            </main>
        </Container>
    );
};
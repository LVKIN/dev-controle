import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import CustomerCard from "@/components/CustomerCard";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Customer()  {
    const session = await getServerSession(authOptions);

    if (!session) return redirect("/api/auth/signin");
    
    return (
        <Container>
            <main className="block w-full">
                <div className="flex justify-between items-center w-full mt-8">
                    <h1 className="font-bold text-3xl">Clientes</h1>
                    <ButtonLink linkRedirect="/dashboard/customers/new" label="Novo cliente" />
                </div>

                <section className="flex flex-wrap gap-4 mt-5">
                    <CustomerCard />
                    <CustomerCard />
                    <CustomerCard />
                </section>
            </main>
        </Container>
    );
};
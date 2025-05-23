import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";
import NewCustomerForm from "@/components/NewCustomerForm";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function NewCustomer() {
    const session = await getServerSession(authOptions);

    if (!session) return redirect("/api/auth/signin");

    return (
        <Container>
            <main className="block w-full">
                <div className="flex items-center gap-4 mb-7">
                    <ButtonLink
                        linkRedirect="/dashboard/customers"
                        label="Voltar"
                        textColor="white"
                        bgColor="#162456"
                    />
                    <h1 className="font-bold text-3xl">Novo cliente</h1>
                </div>
                <NewCustomerForm />
            </main>
        </Container>
    );
};
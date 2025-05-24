import { authOptions } from "@/lib/auth";
import { clx } from "@/utils/clx";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { toast } from "sonner";
import { handleRegisterTicket } from "@/actions/handleResgisterTicket";
import prisma from "@/lib/prisma";

import ButtonLink from "@/components/ButtonLink";
import Container from "@/components/Container";

export default async function NewTicket() {
    const session = await getServerSession(authOptions);

    if (!session) return redirect("/api/auth/signin");

    const customers = await prisma.customer.findMany({
        where: {
            userId: session.user.id
        }
    });
    const hasCustomers = customers.length > 0;

    const formAction = async (formData: FormData) => {
        "use server";

        const title = formData.get("ticketTitle") as string;
        const description = formData.get("ticketDescription") as string;
        const customer = formData.get("ticketCustomer") as string;

        await handleRegisterTicket({
            session,
            ticketTitle: title,
            ticketDescription: description,
            ticketCustomer: customer
        });
    };
    
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
                    <h1 className="font-bold text-3xl">Novo chamado</h1>
                </div>

                <form action={formAction}>
                    <label className="block font-medium text-black text-lg mb-2.5" htmlFor="ticketTitle">
                        Título do chamado
                    </label>
                    <input
                        type="text"
                        id="ticketTitle"
                        name="ticketTitle"
                        className={clx(
                            "w-full rounded px-3 py-2 border-2 border-slate-300 text-sm transition-colors duration-500",
                            "focus:outline-none focus:border-slate-700",
                            "md:px-5 md:text-base"
                        )}
                    />

                    <label className="block font-medium text-black text-lg mt-5 mb-2.5" htmlFor="ticketDescription">
                        Descrição do chamado
                    </label>
                    <textarea
                        id="ticketDescription"
                        name="ticketDescription"
                        className={clx(
                            "block w-full h-20 rounded px-3 py-2 border-2 border-slate-300 text-sm transition-colors duration-500 resize-none",
                            "focus:outline-none focus:border-slate-700",
                            "md:px-5 md:text-base"
                        )}
                    />

                    <label
                        className={clx(
                            "block font-medium text-lg mt-5 mb-2.5",
                            hasCustomers ? "text-black" : "text-gray-500 cursor-not-allowed"
                        )}
                        htmlFor="ticketCustomer"
                    >
                        Selecione o cliente
                    </label>
                    <select
                        id="ticketCustomer"
                        name="ticketCustomer"
                        disabled={!hasCustomers}
                        className={clx(
                            "w-full rounded px-3 py-2 border-2 border-slate-300 text-sm transition-colors duration-500",
                            "focus:outline-none focus:border-slate-700",
                            "md:px-5 md:text-base",
                            hasCustomers ? "text-black" : "text-gray-400 cursor-not-allowed"
                        )}
                        defaultValue="Selecione um cliente"
                    >
                        {customers?.map(({ name, id }) => (
                            <option key={id} value={id}>
                                {name}
                            </option>
                        ))}
                    </select>

                    {hasCustomers ? (
                        <button type="submit" className="w-full mt-5 font-medium text-base text-white bg-blue-600 px-5 py-1.5 rounded ">
                            Criar chamado
                        </button>
                    ) : (
                        <div className="flex flex-col gap-1.5 mt-5 items-center">
                            <p className="text-center text-sm text-red-500">Você ainda não possui nenhum cliente cadastrado 😔</p>
                            <ButtonLink linkRedirect="/dashboard/customers/new" label="Cadastrar novo cliente" />
                        </div>
                    )}
                </form>
            </main>
        </Container>
    );
};
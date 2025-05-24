
import prisma from "@/lib/prisma";
import { Session } from "next-auth";

interface Props {
    session: Session;
    ticketTitle: string;
    ticketDescription: string;
    ticketCustomer: string;
}

export const handleRegisterTicket = async ({ session, ticketTitle, ticketDescription, ticketCustomer }: Props) => {
    try {
        await prisma.ticket.create({
            data: {
                name: ticketTitle,
                description: ticketDescription,
                customerId: ticketCustomer,
                status: "Aberto",
                userId: session.user.id,
                created_at: new Date(),
                updated_at: new Date()
            }
        });

        return { message: "Ticket created successfully", created: true };
    } catch (error) {
        console.error(error);

        return { error: "Failed to create new ticket", created: false };
    }
}
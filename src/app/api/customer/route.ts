import { NextResponse } from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export async function POST(req: NextResponse) {
    const session = await getServerSession(authOptions);
    
    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    };

    const {
        fullName,
        email,
        phone,
        address,
        userId
    } = await req.json();

    try {
        await prisma.customer.create({
            data: {
                name: fullName,
                email,
                phone,
                address,
                userId: session.user.id,
                created_at: new Date(),
                updated_at: new Date()
            }
        });
        
        return NextResponse.json({ message: "Customer created successfully" });
    } catch (err) {
        return NextResponse.json({ error: "Failed to create new customer" }, { status: 400 });
    }
}

export async function DELETE(req: NextResponse) {
    const session = await getServerSession(authOptions);

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    };

    const { searchParams } = new URL(req.url);
    const customerId = searchParams.get("customerId");

    if (!customerId) {
        return NextResponse.json({ error: "Customer ID is required" }, { status: 400 });
    }

    // const customerTickets = await prisma.ticket.findMany({
    //     where: {
    //         customerId
    //     }
    // });

    // customerTickets.find((ticket) => ticket.status === "Pendente") ? await prisma.ticket.updateMany({
    //     where: {
    //         customerId
    //     },
    //     data: {
    //         status: "Cancelado"
    //     }
    // }) : null;

    try {
        await prisma.customer.delete({
            where: {
                id: customerId
            }
        });

        return NextResponse.json({ message: "Customer deleted successfully" });
    } catch (err) {
        return NextResponse.json({ error: "Failed to delete customer" }, { status: 400 });
    }
}
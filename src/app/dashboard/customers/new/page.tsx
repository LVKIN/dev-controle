import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function NewCustomer() {
    const session = await getServerSession(authOptions);

    if (!session) return redirect("/api/auth/signin");

    return (
        <div>
            <h1>New Customer</h1>
        </div>
    );
};
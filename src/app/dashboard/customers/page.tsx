import Container from "@/components/Container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const Customer = async () => {
    const session = await getServerSession(authOptions);

    if (!session) return redirect("/api/auth/signin");
    
    return (
        <Container>
            <h1>Customer</h1>
        </Container>
    );
};

export default Customer;
import Link from "next/link";
import Container from "../Container"

const DashboardHeader = () => {
    return (
        <Container>
            <header className="flex gap-4 w-full my-4 px-3 py-2.5 bg-blue-950 text-white rounded">
                <Link className="font-normal transition-all hover:font-bold " href="/dashboard">
                    Chamados
                </Link>
                <Link className="font-normal transition-all hover:font-bold " href="/dashboard/customers">
                    Clientes
                </Link>
            </header>
        </Container>
    );
};

export default DashboardHeader;
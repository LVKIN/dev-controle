"use client";

import { FiTrash2 } from "react-icons/fi";
import api from "@/lib/api";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface CustomerCardProps {
    id: string;
    name: string;
    email: string;
    phone: string;
    address?: string;
}

const CustomerCard = ({ id, name, email, phone }: CustomerCardProps) => {
    const router = useRouter();

    const handleDeleteCustomer = async (id: string) => {
        try {
            await api.delete("/api/customer", {
                params: {
                    "customerId": id
                }
            });

             router.refresh();

            toast.success("Cliente excluído com sucesso!");
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <article className="flex flex-col gap-2 p-2.5 bg-white w-full max-w-56 rounded-lg shadow-sm border border-gray-300 duration-300 hover:bg-gray-100"> 
            <div>
                <p><strong>Nome: </strong> {name}</p>
            </div>
            <div>
                <p><strong>Email: </strong> {email}</p>
            </div>
            <div>
                <p><strong>Telefone: </strong> {phone}</p>
            </div>
            <button
                onClick={() => handleDeleteCustomer(id)}
                className="flex items-center gap-1.5 w-fit font-medium text-xs text-white bg-[#dc1111] px-3 py-1.5 rounded cursor-pointer mt-auto"
            >
                <FiTrash2 size={16} color="#ffffff" />
                Remover cliente
            </button>
        </article>
    )
};

export default CustomerCard;
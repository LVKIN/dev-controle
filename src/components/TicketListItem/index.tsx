import { FiFile, FiTrash2 } from "react-icons/fi";

interface TicketListItemProps {
    customerName: string;
    createdAt: Date;
    status: string;
}

const TicketListItem = ({ customerName, createdAt, status }: TicketListItemProps) => {
    return (
        <tr className="text-gray-600 hover:bg-gray-200 duration-500">
            <td className="w-fit font-medium text-sm text-left py-1.5">{customerName}</td>
            <td className="hidden sm:table-cell sm:font-medium sm:text-sm sm:text-center sm:py-1.5">
                {createdAt.toLocaleString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </td>
            <td className="font-medium text-sm text-center py-1.5">{status}</td>
            <td className="flex justify-end gap-1.5 py-1.5">
                <button className="cursor-pointer">
                    <FiFile size={20} color="#3314c0" />
                </button>
                <button className="cursor-pointer">
                    <FiTrash2 size={20} color="#dc1111" />
                </button>
            </td>
        </tr>
    );
};

export default TicketListItem;
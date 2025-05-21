import { FiFile, FiTrash2 } from "react-icons/fi";

const TicketListItem = (ticket?: any) => {
    return (
        <tr className="text-gray-600 hover:bg-gray-200 duration-500">
            <td className="font-medium text-sm text-left py-1.5">aaa</td>
            <td className="hidden sm:table-cell sm:font-medium sm:text-sm sm:text-center sm:py-1.5">bbbbbb</td>
            <td className="font-medium text-sm text-center py-1.5">cccccc</td>
            <td className="font-medium text-sm text-right py-1.5">
                <button>
                    <FiFile size={20} color="#3314c0" />
                </button>
                <button>
                    <FiTrash2 size={20} color="#dc1111" />
                </button>
            </td>
        </tr>
    );
};

export default TicketListItem;
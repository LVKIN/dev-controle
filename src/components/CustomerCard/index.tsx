import { FiTrash2 } from "react-icons/fi";

const CustomerCard = () => {
    return (
        <article className="flex flex-col gap-2 p-2.5 bg-white w-full max-w-56 rounded-lg shadow-sm border border-gray-300 duration-300 hover:bg-gray-100"> 
            <div>
                <p><strong>Nome:</strong> Teste</p>
            </div>
            <div>
                <p><strong>Email:</strong> teste@teste.com</p>
            </div>
            <div>
                <p><strong>Telefone:</strong> 99999-9999</p>
            </div>
            <button className="flex items-center gap-1.5 w-fit font-medium text-xs text-white bg-[#dc1111] px-3 py-1.5 rounded cursor-pointer">
                <FiTrash2 size={16} color="#ffffff" />
                Remover cliente
            </button>
        </article>
    )
};

export default CustomerCard;
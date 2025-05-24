"use client";
import { toast } from "sonner"

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "../Input";
import api from "@/lib/api";
import { useRouter } from "next/navigation";

const SCHEMA = z.object({
  fullName: z
    .string({ required_error: "O nome é obrigatório" })
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(50, "Nome deve ter no máximo 50 caracteres"),
  email: z
    .string({ required_error: "O e-mail é obrigatório" })
    .email("Insira um e-mail válido"),
  phone: z
    .string({ required_error: "O telefone é obrigatório" })
    .length(15, "Telefone inválido"),
  address: z
    .string({ required_error: "O endereço é obrigatório" })
    .min(3, "Endereço deve ter no mínimo 3 caracteres")
    .max(50, "Endereço deve ter no máximo 50 caracteres"),
});

type FormData = z.infer<typeof SCHEMA>;

const NewCustomerForm = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(SCHEMA)
    });

    const router = useRouter();
    const handleRegisterCustomer = async ({ fullName, email, phone, address }: FormData) => {
        await api.post("/api/customer", {
            fullName,
            email,
            phone,
            address
        });

        toast.success("Cliente cadastrado com sucesso!");

        setTimeout(() => {
            router.push("/dashboard/customers");
        }, 3000);
    };

    return (
        <form className="w-full" onSubmit={handleSubmit(handleRegisterCustomer)}>
            <div className="block w-full sm:flex sm:gap-4">
                <Input
                    label="Nome Completo"
                    type="text"
                    placeholder="Digite o nome completo"
                    id="fullName"
                    control={control}
                    error={errors.fullName?.message}
                />
                <Input
                    label="Telefone"
                    type="tel"
                    placeholder="(99) 99999-9999"
                    id="phone"
                    control={control}
                    error={errors.phone?.message}
                />
                <Input
                    label="E-mail"
                    type="email"
                    placeholder="Digite o e-mail"
                    id="email"
                    control={control}
                    error={errors.email?.message}
                />
            </div>
            <Input
                label="Endereço completo"
                type="text"
                placeholder="Digite o endereço completo"
                id="address"
                control={control}
                error={errors.address?.message}
            />
            <button type="submit" className="w-full mt-5 font-medium text-base text-white bg-blue-600 px-5 py-1.5 rounded ">
                Cadastrar
            </button>
        </form>
    );
};

export default NewCustomerForm;
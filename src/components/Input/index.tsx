"use client";

import { InputHTMLAttributes } from "react";
import { clx } from "@/utils/clx";
import { Controller, Control } from "react-hook-form";

interface InputProp extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    id: string;
    error?: string;
    control: Control<any>;
}

const formatPhoneMask = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (!digits) return "";

    if (digits.length <= 2) return `(${digits}`;
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;

    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

const Input = ({ label, id, error, type, control, ...props }: InputProp) => {
    const isPhone = type === "tel";

    return (
        <span className="block w-full mt-1.5 mb-2.5">
            <label className="block font-medium text-black text-lg mb-2.5" htmlFor={id}> 
                {label}
            </label>
            <Controller
                control={control}
                name={id}
                render={({ field }) => (
                    <input
                        {...field}
                        {...props}
                        id={id}
                        value={isPhone ? formatPhoneMask(field.value ?? "") : field.value ?? ""}
                        className={clx(
                            "w-full rounded px-3 py-2 border-2 border-slate-300 text-sm transition-colors duration-500 md:px-5 md:text-base",
                            "focus:outline-none focus:border-slate-700",
                            props.className
                        )}
                        onChange={(e) => {
                            if (isPhone) {
                                const masked = formatPhoneMask(e.target.value);
                                field.onChange(masked);
                            } else {
                                field.onChange(e);
                            }
                        }}
                    />
                )}
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
        </span>
    );
};

export default Input;
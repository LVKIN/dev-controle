import Link from "next/link";

interface ButtonLinkProps {
    linkRedirect: string;
    label: string;
    textColor?: string;
    bgColor?: string;
}

const ButtonLink = ({ linkRedirect, label, textColor, bgColor }: ButtonLinkProps) => {
    return (
        <Link
            className="font-medium text-base px-5 py-1.5 rounded"
            href={linkRedirect}
            style={{
                color: textColor ?? "white",
                backgroundColor: bgColor ?? "#155dfc",
            }}
        > 
            {label}
        </Link>
    );
}

export default ButtonLink;
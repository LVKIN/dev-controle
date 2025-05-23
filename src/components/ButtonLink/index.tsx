import Link from "next/link";

interface ButtonLinkProps {
    linkRedirect: string;
    label: string;
}

const ButtonLink = ({ linkRedirect, label }: ButtonLinkProps) => {
    return (
        <Link
            className="font-medium text-base text-white bg-blue-600 px-5 py-1.5 rounded"
            href={linkRedirect}
        > 
            {label}
        </Link>
    );
}

export default ButtonLink;
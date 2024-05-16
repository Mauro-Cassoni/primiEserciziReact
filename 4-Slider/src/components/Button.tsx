import { ReactElement } from "react";

interface iButton {
    text: string | ReactElement;
    className?: string;
    onClick?: () => void;
}

export default function Button({ text, className, onClick}: iButton) {
    return (
        <button className={`${className} bg-[var(--primary)] hover:bg-[var(--primary-hover)] px-3 py-2 rounded-3xl`}
        onClick={onClick}>
            {text}
        </button>
    )
}

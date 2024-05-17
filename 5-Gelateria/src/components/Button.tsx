import { ReactNode } from "react"

interface iButton {
    children: ReactNode;
    onClick: () => void;
    className?: string;
}


export default function Button({ children, onClick, className }: iButton) {
    return (
        <button onClick={onClick}
        className={`${className} 
        bg-[var(--primary)] hover:bg-[var(--primary-hover)] p-2 rounded-full`}>
            {children}
        </button>
    )
}

import React, { ReactNode } from "react"

interface iButton {
    children: ReactNode;
    onClick: () => void | ReactNode;
    className?: string;
}


export default function Button({ children, onClick, className }: iButton) {
    return (
        <button onClick={onClick}
        className={`${className} 
        bg-[var(--primary)] hover:bg-[var(--primary-hover)] py-2 px-3 rounded-full`}>
            {children}
        </button>
    )
}

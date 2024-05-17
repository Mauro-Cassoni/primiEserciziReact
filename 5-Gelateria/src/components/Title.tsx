import { ReactNode } from "react";

interface iTitle {
    children: ReactNode;
    className?: string;
}


export default function Title({ children, className }: iTitle) {
    return (
        <div className="flex justify-center">
            <h2 className={`${className} text-3xl font-sans`}>
                {children}
            </h2>
        </div>
    )
}

import starCreator from "./starCreator"

export interface iCard {
    id:number,
    autore: string, 
    recensione: string, 
    voto: number
    className?:string, 
    theme:string
}

export default function Card({autore, recensione, voto, className}:iCard) {
    return (
        <div className={`${className} absolute bg-[var(--card)] w-[90%] rounded-xl p-3 text-lg top-20 left-1/2 shadow-md shadow-[var(--primary-hover)]`}>
            <h4 className="font-bold">{autore}</h4>
            <p>{recensione}</p>
            <div className="flex my-2 gap-1">{starCreator(voto)}</div>
        </div>
    )
}

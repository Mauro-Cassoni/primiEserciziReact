export interface iCard {
    autore: string, 
    recensione: string, 
    voto: number
    className?:string, 
}

export default function Card({autore, recensione, voto, className}:iCard) {
    return (
        <div className={`${className}`}>
            <h4>{autore}</h4>
            <p>{recensione}</p>
            <p>{voto}</p>
        </div>
    )
}

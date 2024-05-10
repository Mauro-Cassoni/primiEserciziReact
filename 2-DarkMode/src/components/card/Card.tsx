import { iCard } from "../../interfaces/iCard";
import './Card.scss'

interface iProp extends iCard {
    remove: (id: number) => void;
}

export default function Card({ remove, ...card }: iProp): JSX.Element {
    return (
        <div className="card text-center w-72 rounded shadow-md shadow-slate-500 p-3">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <div className="undertext mb-3 border-b-2 w-1/3 mx-auto"></div>
            <p>{card.text}</p>
            <button className="remove px-2 py-1 rounded m-1" onClick={() => remove(card.id)}>x</button>
        </div>
    )
}

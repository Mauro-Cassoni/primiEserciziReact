import { iCard } from "../../interfaces/iCard";
import './Card.scss'

interface iProp extends iCard {
    remove: (id: number) => void;
}

export default function Card({ remove, ...card }: iProp): JSX.Element {
    return (
        <div className="card text-center w-72 rounded bg-white p-3 shadow-md shadow-slate-500">
            <h2 className="text-xl font-bold">{card.title}</h2>
            <div className="mb-3 border-b-2 border-b-blue-500 w-1/3 mx-auto"></div>
            <p>{card.text}</p>
            <button onClick={() => remove(card.id)}>x</button>
        </div>
    )
}

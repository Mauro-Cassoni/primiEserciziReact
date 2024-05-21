import { iIceCream } from "../interfaces/iIceCream";


export default function Card(i: iIceCream) {
    return (
        <div className="bg-[var(--card)] flex p-3 rounded shadow hover:bg-[var(--primary-hover)] hover:scale-105">
            <div className="flex-shrink-0" >
                <img src={i.img} alt={i.img} className="h-28 w-36 rounded border-white border-4" />
            </div>
            <div className="ps-3">
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="font-bold">
                            {i.nome}
                            <p className="text-xs">{i.categoria}</p>
                        </div>
                        <div className="bg-[var(--primary)] text-white py-0 px-1 rounded font-bold h-fit">
                            {(i.prezzo / 100).toFixed(2)}€
                        </div>
                    </div>

                    <div className="bg-[var(--text)] opacity-10 h-px w-full my-2"></div>

                    <div>
                        <p className="text-xs">{i.descrizione}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { iCard } from "../interfaces/iCard";
import Button from "./Button";

export default function card({ titolo, descrizione, durata, img, prezzo, next, prev }: iCard) {
    return (
        <div className="rounded-lg card">
            <img src={img} alt={titolo} className="rounded-t" />
            <div className="p-3 flex flex-col gap-2 text-start">
                <h3 className="font-bold text-3xl">{titolo}</h3>
                <p>{descrizione}</p>

                <div className="flex justify-between">
                    <div className="text-[var(--primary)]">{durata}</div>
                    <div className="text-[var(--primary)]">{(prezzo / 100).toFixed(2)}€</div>
                </div>

                <div className="flex justify-between">
                    <Button text={<FaArrowLeft />} onClick={prev}></Button>
                    <Button text={<FaArrowRight />} onClick={next}></Button>
                </div>

            </div>

        </div>
    )
}

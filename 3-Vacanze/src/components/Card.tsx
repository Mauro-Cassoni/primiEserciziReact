import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { iCard } from "../interfaces/iCard";
import Button from "./Button";

export default function card({ titolo, descrizione, durata, img, prezzo, next, prev }: iCard) {
    return (
        <div className="rounded">
            <img src={img} alt={titolo} />
            <div>
                <h3>{titolo}</h3>
                <p>{descrizione}</p>

                <div className="flex justify-between">
                <div>{durata}</div>
                <div>{prezzo}</div>
                </div>
            </div>

            <div className="flex justify-between">
                <Button text={<FaArrowLeft />} onClick={prev}></Button>
                <Button text={<FaArrowRight />} onClick={next}></Button>
            </div>

        </div>
    )
}

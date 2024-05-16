import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

export default function starCreator(n:number) {
    return Array.from({ length: 5 }, (_, index) => {
        if (n >= index + 1) {
            return <BsStarFill key={index} className="star" fill="#fca903" />;
        } else if (n >= index + 0.5) {
            return <BsStarHalf key={index} className="star" fill="#fca903" />;
        } else {
            return <BsStar key={index} className="star" fill="#fca903" />;
        }
    });
}
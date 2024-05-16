import { useEffect, useState } from 'react'
import { data } from './Data'
import { iCard } from './Card';

export default function Slider() {
    const [reviews, setReviews] = useState<iCard[]>(data);
    const [active, setActive] = useState<number>(0)

    const nextSlide = () => {
        setActive((prevValue) => {
            if (prevValue + 1 > reviews.length - 1) {
                return 0;
            } else {
                return prevValue + 1;
            }
        })
    }

    const prevSlide = () => {
        setActive((prevValue) => {
            if (prevValue - 1 < 0) {
                return reviews.length - 1;
            } else {
                return prevValue - 1;
            }
        })
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setActive((prevValue) => {
                if (prevValue + 1 === reviews.length) {
                    return 0;
                } else {
                    return prevValue + 1;
                }
            })
        }, 4000);
        return clearTimeout(timer);
           // eslint-disable-next-line react-hooks/exhaustive-deps
    },[active])


    return (
        <div>Slider</div>
    )
}

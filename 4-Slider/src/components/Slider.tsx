import { useEffect, useState } from 'react'
import { data } from './Data'
import Card, { iCard } from './Card';
import Button from './Button';

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
    }, [active])


    return (
        <div className='flex flex-col flex-nowrap relative w-full'>
            {
                reviews.map((review, index) => {
                    let positionClass = '';
                    if (index === active) {
                        positionClass = 'active';
                    } else if (
                        active === index + 1 ||
                        (active === 0 && index === reviews.length - 1)
                    ) {
                        positionClass = 'prev';
                    } else {
                        positionClass = 'next';
                    }
                    return (
                        <Card key={review.id} {...review} className={positionClass}></Card>
                    )
                })
            }

            <div className='w-full absolute top-72'>
                <div className='flex justify-between'>
                    <Button text={'PREV'} onClick={prevSlide}></Button>
                    <Button text={'NEXT'} onClick={nextSlide}></Button>
                </div>
            </div>
        </div>
    )
}

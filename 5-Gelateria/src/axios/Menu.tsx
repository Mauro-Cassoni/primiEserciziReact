import axios from "axios";
import { useEffect, useState } from "react"
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import { iIceCream } from "../interfaces/iIceCream";
import Button from "../components/Button";
import Card from "../components/Card";

export default function Menu() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [iceCreams, setIceCreams] = useState<iIceCream[]>([]);
    const [filter, setFilter] = useState<iIceCream[]>([]);
    const [selected, setSelected] = useState<number>(0);
    const [categories, setCategories] = useState<string[]>([]);
    const url = 'https://react--course-api.herokuapp.com/api/v1/data/gelateria';

    const filterProduct = (category: string, index: number) => {
        setSelected(index)

        if (category === "all") {
            setFilter(iceCreams)
        } else {
            const filteredProducts = iceCreams.filter((el) => {
                el.categoria === category ? el : ""
            });
            setFilter(filteredProducts);
        }
    }

    const getData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            setIceCreams(response.data.data)
            setFilter(response.data.data)

            const categories: string[] = Array.from(
                new Set(response.data.data.map((el: iIceCream) => el.categoria))
            )

            categories.unshift('all')
            setCategories(categories)
        } catch (error) {
            console.log(error);
            setIsError(true);
        }
        setIsLoading(false);
    }

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log(iceCreams);
    }, [iceCreams])

    if (isLoading) return <Loading></Loading>
    if (isError) return <ErrorComponent></ErrorComponent>
    return (
        <div className="flex flex-col justify-center py-8">

            <section className="flex justify-between w-full">
                {
                    categories.map((category, index) => (
                        <button key={index} onClick={() => filterProduct(category, index)}
                            className="uppercase text-xs">
                            {category}
                        </button>
                    ))
                }
            </section>

            <div className="bg-[var(--text)] opacity-10 h-px w-full my-5"></div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                    filter.map((el) => (
                        <Card key={el.id} {...el}></Card>
                    ))
                }
            </section>

        </div>
    )
}

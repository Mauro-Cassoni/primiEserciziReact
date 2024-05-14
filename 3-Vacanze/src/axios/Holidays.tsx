import axios from "axios";
import { useEffect, useState } from "react"
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import Card from "../components/Card";
import { iCard } from "../interfaces/iCard";

export default function Holidays() {

    const url = "https://react--course-api.herokuapp.com/api/v1/data/vacanze";

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isError, setIsError] = useState<boolean>(false)
    const [data, setData] = useState<iCard[]>([])
    const [selected, setSelected] = useState<number>(1)

    const nextHoliday = () => {
        setSelected((prevValue) => {
            if (prevValue + 1 === data.length) {
                return 0;
            } else {
                return prevValue + 1;
            }
        })
    }

    const prevHoliday = () => {
        setSelected((prevValue) => {
            if (prevValue - 1 < 0) {
                return data.length - 1;
            } else {
                return prevValue - 1;
            }
        })
    }

    const getData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            setData(response.data.data);
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
        console.log(data);
    }, [data]);

    if (isLoading) {
        return <Loading></Loading>
    } if (isError) {
        return <ErrorComponent></ErrorComponent>
    }
    return (
        <>
            {data.length > 0 ? (
                <Card
                    {...data[selected]}
                    next={nextHoliday}
                    prev={prevHoliday}
                ></Card>
            ) : (
                <h3>There are no holidays</h3>
            )}
        </>
    )

}

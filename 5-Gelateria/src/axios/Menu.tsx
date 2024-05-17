import axios from "axios";
import { useEffect, useState } from "react"
import Loading from "../components/Loading";
import ErrorComponent from "../components/ErrorComponent";
import { iIceCream } from "../interfaces/iIceCream";

export default function Menu() {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isError, setIsError] = useState<boolean>(false);
    const [iceCreams, setIceCreams] = useState<iIceCream[]>([]);
    const [filter, setFilter] = useState();
    const [selected, setSelected] = useState(0);
    const [categories, setCategories] = useState([]);
    const url = 'https://react--course-api.herokuapp.com/api/v1/data/gelateria';

    const getData = async () => {
        setIsError(false);
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            setIceCreams(response.data.data)
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
        <div>
            {
                
            }
        </div>
    )
}

import React, { useState } from 'react'
import { data } from '../array';

interface Person {
    id: number,
    name: string,
    surname?: string
}

export default function ArrayState(): JSX.Element {
    const [people, setPeople] = useState<Person[]>(data);

    const remove = (id:number) => {
            setPeople((oldPeople:Person[]) => {
                return oldPeople.filter(el => el.id !== id)
            })
    }


    return (
        <>
            {
                people.map( (el) => {
                    const {id, name, surname} = el;
                    return(
                        <div key={id}>
                            <h5>{name}</h5>
                            <h5>{surname}</h5>

                            <button onClick={() => remove(id)}>
                                x
                            </button>
                        </div>
                    )
                })
            }
        </>
    )
}

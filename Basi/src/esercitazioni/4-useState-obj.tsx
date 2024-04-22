import React, { useState } from 'react'

interface Person {
    name : string;
    age: number;
    greeting: string;
}

export default function StateObj(): JSX.Element {

    const [person, setPerson] = useState<Person>({
        name: 'Mauro',
        age: 30,
        greeting : 'Hello'
    });

    const changeAge = () => {
        setPerson({
            ...person,
            age: 31
        })
    }


    return (
        <>
        <div>
            <h5>{person.name}</h5>
            <h5>{person.age}</h5>
            <h5>{person.greeting}</h5>
        </div>

        <button onClick={changeAge}>
            Change age
        </button>
        </>
    )
}

import React, { useState } from 'react'
import { data } from '../array'

interface Person {
  id: number;
  name: string;
}

export default function ArrayState(): JSX.Element {
  const [people, setPeople] = useState<Person[]>(data);

  const removeItem = (id:number): void => {
    const newPeople = people.filter(el => el.id !== id);
    setPeople(newPeople)
  }

  return (
    <>
      {
        people.map(el => {
          const { id, name } = el
          return (
            <div key={id}>
              <p>{name}</p>
              <button onClick={() => removeItem(id)}>x</button>
            </div>
          )
        })
      }
    </>
  )
}



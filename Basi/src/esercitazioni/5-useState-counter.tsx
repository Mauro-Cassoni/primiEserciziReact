import React, { useState } from 'react'

export default function UseCounterComponent(): JSX.Element {

    const [counter, setCounter] = useState<number>(0);

    const reset = () => {
        setCounter(0)
    }

    // const add = () => {
    //     setCounter((oldValue:number) => {
    //         return oldValue + 1
    //     })
    // }

    const add = () => {
        setTimeout(function(){
            setCounter( (oldValue:number) => {
                return oldValue + 1
            })
        }, 2000)
    }

    const remove = () => {
        setCounter((oldValue:number) => {
            return oldValue - 1
        })
    }

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={add}>+</button>
            <button onClick={remove}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

import React, { useState } from 'react'

export default function UsoBase(): JSX.Element {
    
    const [title, setTitle] = useState<string>('Hello World')

    const changeTitle = (): void => {
        if (title === 'Hello World') {
            setTitle('Esercizio State');
        } else setTitle('Hello World');
    }
    
    return (
        <>
        <h2>{title}</h2>
        <button onClick={changeTitle}>Change me</button>
        </>
    )
}

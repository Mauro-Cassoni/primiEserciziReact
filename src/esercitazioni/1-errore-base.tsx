import React from 'react'

export default function erroreBase() {
    let title = 'Vecchio titolo';

    const cambiaTitolo = () => {
        title = 'Esercizio 1';
        console.log(title);

    }
    return (
        <>
            <h2>{title}</h2>
            <button onClick={cambiaTitolo}>Change me</button>
        </>
    )
}

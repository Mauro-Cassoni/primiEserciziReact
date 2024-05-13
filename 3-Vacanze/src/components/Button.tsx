import React from 'react'
import { Ibutton } from '../interfaces/iButton'

export default function button({ text, onClick }: Ibutton) {
    return (
        <button onClick={onClick} className='button rounded-2xl px-3 py-1'>
            {text}
        </button>
    )
}

import React from 'react'
import { iUser } from '../interfaces/iUser'

export default function Card({id, img, name, slogan:info}:iUser): JSX.Element {
    return (
        <div className='card' key={id}>
            <div>
                <img src={`${img}`} alt="image-profile" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{info}</p>
            </div>
            <div>
                <button>
                    x
                </button>
            </div>
        </div>
    )
}

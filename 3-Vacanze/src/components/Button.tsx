import { Ibutton } from '../interfaces/iButton'

export default function button({ text, onClick }: Ibutton) {
    return (
        <button onClick={onClick} className='button rounded-2xl px-4 py-2'>
            {text}
        </button>
    )
}

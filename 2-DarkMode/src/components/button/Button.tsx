import { iButton } from '../../interfaces/iButton'
import './Button.scss'

export default function Button({text,onClick}: iButton) {
    return (
        <button className="button bg-blue-500 shadow-md shadow-slate-500 border-none m-4 py-1 px-3 rounded-lg" onClick={onClick}>
            {text}
        </button>
    )
}

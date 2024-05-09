import { iButton } from '../../interfaces/iButton'
import './Button.scss'

export default function Button({text,onClick}: iButton) {
    return (
        <button className="button" onClick={onClick}>
            {text}
        </button>
    )
}

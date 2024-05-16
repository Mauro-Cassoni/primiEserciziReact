import { iTitle } from "../interfaces/iTitle";

export default function Title({text}:iTitle) {
    return (
        <div>
            <div className='text-3xl'>{text}</div>
            <div className='myUnderline h-1 rounded w-[100px] m-auto mb-3'></div>
        </div>
    )
}

import { iUser } from '../interfaces/iUser'

interface iProp extends iUser {
    remove: (id: number) => void;
}

export default function Card({ id, img, name, slogan: info, remove }: iProp): JSX.Element {
    return (
        <div className='card bg-gray-900 p-5 border border-black flex justify-between'>
            <div className=' flex gap-5'>
                <div>
                    <img src={`${img}`} alt="image-profile" className=' rounded-full h-14' />
                </div>
                <div className=''>
                    <h3 className='text-white'>{name}</h3>
                    <p className='text-white text-xs font-thin'>{info}</p>
                </div>
            </div>
            <div className='flex justify-center '>
                <button onClick={() => remove(id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-700">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

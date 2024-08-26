interface iLinks {
    className?: string;
}

export default function links({className}: iLinks) {
    return (
        <ul className={`${className}`}>
            <li>Home</li>
            <li>Chi siamo</li>
            <li>Progetti</li>
            <li>Contattaci</li>
        </ul>
    )
}

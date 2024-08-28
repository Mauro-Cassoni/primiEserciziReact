import { Link } from "react-router-dom";

interface iLinks {
    className?: string;
}

export default function links({className}: iLinks) {
    return (
        <ul className={`${className}`}>
            <Link to={''}>Home</Link>
            <Link to={''}>Chi siamo</Link>
            <Link to={''}>Progetti</Link>
            <Link to={''}>Contattaci</Link>
        </ul>
    )
}

import { useEffect, useRef, useState } from "react"
import { IoMdMenu } from "react-icons/io";
import Links from "./links";

export default function Navbar() {

    const [show, setShow] = useState(false);
    const linkListRef = useRef<HTMLDivElement>(null);
    const linkContainerRef = useRef<HTMLDivElement>(null);

    const handleShow = () => {
        setShow(!show)
    }

    useEffect(() => {
        if (linkListRef.current && linkContainerRef.current) {
            const linkListHeight = linkListRef.current.getBoundingClientRect().height;
            if (show) {
                linkContainerRef.current.style.maxHeight = `${linkListHeight}px`;
            } else {
                linkContainerRef.current.style.maxHeight = `0px`;
            }
        }
    }, [show]);


    return (
        <header>
            <nav className="flex justify-between px-5 py-3">
                <div>
                    <img src={`/vite.svg`} alt="" />
                </div>
                <button onClick={handleShow}>
                    <IoMdMenu className="text-2xl " />
                </button>
            </nav>
            <div ref={linkContainerRef}
                className={`overflow-hidden transition-max-height duration-300 ease-in-out`}
                style={{ maxHeight: show ? `${linkListRef.current?.getBoundingClientRect().height}px` : '0px' }}>
                <div ref={linkListRef}>
                    <Links></Links>
                </div>
            </div>
        </header>
    )
}

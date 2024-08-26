import { useEffect, useRef, useState } from "react"
import { IoMdClose, IoMdMenu } from "react-icons/io";
import Links from "./links";
import ThemeButton from "./ThemeButton";

export default function Navbar() {

    const [show, setShow] = useState(false);
    const [showButton, setShowButton] = useState(<IoMdMenu />);
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

    useEffect(() => {
        if (!show) {
            setShowButton(<IoMdMenu />)
        } else {
            setShowButton(<IoMdClose />)
        }
    }, [show])


    return (
        <header>
            <nav className="flex justify-between px-5 py-3">
                <div>
                    <img src={`/vite.svg`} alt="" />
                </div>

                <Links className="hidden md:flex gap-3"></Links>

                <div className="hidden md:block">
                    <ThemeButton />
                </div>

                <button onClick={handleShow} className="md:hidden text-2xl">
                    {showButton}
                </button>
            </nav>
            <div ref={linkContainerRef}
                className={`overflow-hidden transition-max-height duration-300 ease-in-out md:hidden`}
                style={{ maxHeight: show ? `${linkListRef.current?.getBoundingClientRect().height}px` : '0px' }}>
                <div ref={linkListRef} className="flex flex-col items-center gap-3 pb-5">
                    <Links className="flex flex-col gap-3 items-center"></Links>
                    <div>
                        <ThemeButton />
                    </div>
                </div>
            </div>
        </header>
    )
}

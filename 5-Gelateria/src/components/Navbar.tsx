import { useEffect, useState } from "react"
import Button from "./Button"
import { IoSunny, IoMoonSharp } from "react-icons/io5"

const getThemeFromLocalStorage = () => {
    if (localStorage.getItem('theme')) {
        return localStorage.getItem('theme')
    } else {
        return 'light-mode'
    }
}

export default function Navbar() {

    const [theme, setTheme] = useState(getThemeFromLocalStorage());
    const [themeButton, setThemeButton] = useState(<IoSunny />);

    const changeTheme = () => {
        if (theme === 'light-mode') {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }
    }

    const changeThemeButton = () => {
        if (theme === 'light-mode') {
            setThemeButton(<IoSunny />);
        } else {
            setThemeButton(<IoMoonSharp />)
        }
    }

    useEffect(() => {
        changeThemeButton();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [theme])

    useEffect(() => {
        if (theme !== null) {
            document.documentElement.className = theme;
            localStorage.setItem('theme', theme);
        }
    })

    return (
        <div className="flex justify-between py-4 px-10">
            <h1 className="text-4xl font-bold">Nice Cream</h1>
            <Button onClick={changeTheme}>{themeButton}</Button>
        </div>
    )
}

import { ReactElement, useEffect, useState } from "react"
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const getThemeFromLocalStorage = () => {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme) {
        return savedTheme;
    } else {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const theme = prefersDarkMode ? 'dark-mode' : 'light-mode';

        localStorage.setItem('theme', theme);

        return theme;
    }
};


export default function ThemeButton() {
    const [themeButton, setThemeButton] = useState<ReactElement>(<IoSunny />);
    const [theme, setTheme] = useState<string>(getThemeFromLocalStorage());

    useEffect(() => {
        if (theme === 'dark-mode') {
            setThemeButton(<IoSunny />)
        } else {
            setThemeButton(<FaMoon />)
        }
    }, [theme])

    const changeTheme = () => {
        if (theme === 'light-mode') {
            setTheme('dark-mode');
        } else {
            setTheme('light-mode');
        }
    }

    return (
        <button onClick={changeTheme}>{themeButton}</button>
    )
}

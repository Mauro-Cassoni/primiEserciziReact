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
            setThemeButton(<IoSunny />);
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
        } else {
            setThemeButton(<FaMoon />);
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
        }
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    const changeTheme = () => {
        setTheme(theme === 'light-mode' ? 'dark-mode' : 'light-mode');
    };

    return (
        <button onClick={changeTheme}>{themeButton}</button>
    )
}

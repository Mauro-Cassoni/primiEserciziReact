import { useEffect, useState } from 'react';
import './App.scss'
import Button from './components/Button'
import { IoSunny, IoMoonSharp } from 'react-icons/io5';

const getThemeFromLocalStrorage = (): string | null => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light-mode'
  }
}

function App() {

  const [theme, setTheme] = useState(getThemeFromLocalStrorage());
  const [themeButton, setThemeButton] = useState(<IoSunny />)

  const changeTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  }

  const changeButtonText = () => {
    if (theme === 'light-mode') {
      setThemeButton(<IoSunny />);
    } else {
      setThemeButton(<IoMoonSharp />);
    }
  }

  useEffect(() => {
    changeButtonText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])

  if (theme !== null) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }

  return (
    <>
      <header className='text-end'>
        <Button
          text={themeButton}
          className='m-1'
          onClick={changeTheme}></Button>
      </header>

      <main className='flex justify-center'>
  
      </main>
    </>
  )
}

export default App

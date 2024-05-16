import { useEffect, useState } from 'react';
import './App.scss'
import Button from './components/Button';
import Title from './components/Title';
import Holidays from './axios/Holidays';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const getThemeFromLocalStorage = (): string | null => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light-mode'
  }
}

function App() {

  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [themeText, setThemeText] = useState(<IoMdSunny />);

  const changeTheme = (): void => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  const changeText = (): void => {
    if (theme === 'light-mode') {
      setThemeText(<IoMdSunny />)
    } else {
      setThemeText(<IoMdMoon />)
    }
  }

  useEffect(() => {
    if (theme !== null) {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme)
    }
  })

  useEffect(() => {
    changeText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme])


  return (
    <div className='grid justify-center'>
      <div className='text-right m-1'>
        <Button text={themeText} onClick={changeTheme}></Button>
      </div>

      <div className='flex flex-col justify-center text-center p-3 font-mono font-bold'>
        <div className='mb-6'>
          <Title text={'Le Nostre Vacanze'}></Title>
        </div>

        <div  className='w-[50vw] mx-40 rounded-lg'>
          <Holidays></Holidays>
        </div>

      </div>
    </div>
  )
}

export default App

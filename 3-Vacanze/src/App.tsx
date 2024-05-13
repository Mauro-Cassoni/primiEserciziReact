import { useEffect, useState } from 'react';
import './App.scss'
import Button from './components/Button';
import Title from './components/Title';

const getThemeFromLocalStorage = (): string | null => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light-mode'
  }
}

function App() {

  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [themeText, setThemeText] = useState('light');

  const changeTheme = (): void => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  const changeText = (): void => {
    if (theme === 'light-mode') {
      setThemeText('LIGHT')
    } else {
      setThemeText('DARK')
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
    <>
    <div className='text-right m-1'>
      <Button text={themeText} onClick={changeTheme}></Button>
    </div>
      <div className='grid justify-center p-3 font-mono font-bold'>
        <div>
          <Title text={'Le Nostre Vacanze'}></Title>
        </div>
        <div>

        </div>


      </div>
    </>
  )
}

export default App

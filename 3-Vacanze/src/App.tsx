import { useEffect, useState } from 'react';
import './App.scss'
import Button from './components/Button';

const getThemeFromLocalStorage = ():string | null => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return 'light-mode'
  }
}

function App() {

  const [theme, setTheme] = useState(getThemeFromLocalStorage());
  const [themeIcon, setThemeIcon] = useState('light');

  const changeTheme = ():void => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  }

  const changeIcon = ():void => {
    if (theme === 'light-mode') {
      setThemeIcon('LIGHT')
    } else {
      setThemeIcon('DARK')
    }
  }

  useEffect(() => {
    if (theme !== null) {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme)
    }
  })

  useEffect(() => {
    changeIcon();
  }, [theme])


  return (
    <>
      <div>App</div>
      <Button text={themeIcon} onClick={changeTheme}></Button>
    </>
  )
}

export default App

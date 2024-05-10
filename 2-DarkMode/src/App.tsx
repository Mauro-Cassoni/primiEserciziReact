import './App.scss'
import Button from './components/button/Button'
import { cards as cardArray } from './arrays/Array'
import { useEffect, useState } from 'react'
import { iCard } from './interfaces/iCard'
import Card from './components/card/Card'

const getThemeFromLocalStorage = () => {
  if (localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  } else {
    return "light-mode";
  }
};

function App() {
  const [posts, setPosts] = useState<iCard[]>(cardArray);
  const [theme, setTheme] = useState(getThemeFromLocalStorage());

  const changeTheme = () => {
    if (theme === "light-mode") {
      setTheme("dark-mode")
    } else {
      setTheme("light-mode")
    }
  }

  useEffect(() => {
    if (theme !== null) {
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    }
  }, [theme])


  const remove = (id: number) => {
    setPosts(posts.filter(p => p.id !== id))
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <Button text="CHANGE" onClick={changeTheme} ></Button>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4'>
        {
          posts.map(post => (
            <Card key={post.id} {...post} remove={remove}></Card>
          ))
        }
      </div>
    </div>
  )
}

export default App

import './App.scss'
import Button from './components/button/Button'
import { cards as cardArray } from './arrays/Array'
import { useState } from 'react'
import { iCard } from './interfaces/iCard'
import Card from './components/card/Card'

function App() {
  const [posts, setPosts] = useState<iCard[]>(cardArray);

  const remove = (id: number) => {
    setPosts(cardArray.filter(p => p.id !== id))
  }

  const handleClick = () => {
    console.log(cardArray);
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <Button text="CHANGE" onClick={handleClick} ></Button>
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

import { users as userArray } from './Array'

import './App.scss'
import Card from './components/Card'
import { iUser } from './interfaces/iUser';
import { useState } from 'react';

function App() {

  const [users, setUsers] = useState<iUser[]>(userArray);

  const remove = (id: number) => {
    setUsers(users.filter(u => u.id !== id))
  }

  const removeAll = () => {
    setUsers([])
  }

  const reload = () => {
    setUsers(userArray)
  }

  return (
    <>
    <div className='flex justify-center'>
      <div className='flex flex-col basis-2/3'>
        <div className=''>
        {
          users.map(user => {
            return (
              <Card key={user.id} {...user} remove={remove}></Card>
            )
          })
        }
        </div>
        <div className='flex justify-between py-8'>
          <button className='rounded-2xl px-3 py-1 text-white bg-blue-400' onClick={reload}>RELOAD</button>
          <button className='border-2 border-red-600 rounded-2xl px-3 py-1 text-red-600' onClick={removeAll}>DELETE ALL</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

import { users } from './Array'

import './App.scss'
import Card from './component/Card'

function App() {

  return (
    <>
      <div className=''>
        {
          users.map(user => {
            return (
              <Card {...user} ></Card>
            )
          })
        }
      </div>
    </>
  )
}

export default App

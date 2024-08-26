import './App.scss'
import Menu from './axios/Menu'
import Navbar from './components/Navbar'
import Title from './components/Title'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main  className='flex justify-center'>
        <div  className='w-[70vw] max-w-[900px]'>
        <Title>Le nostre scelte</Title>
        <Menu></Menu>
        </div>
      </main>
    </>
  )
}

export default App

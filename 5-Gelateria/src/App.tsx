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

      <main>
        <Title>Le nostre scelte</Title>
        <Menu></Menu>
      </main>
    </>
  )
}

export default App

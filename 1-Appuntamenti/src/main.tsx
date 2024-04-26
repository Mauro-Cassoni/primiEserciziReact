import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className=' bg-blue-900 p-10 flex flex-wrap flex-col justify-center'>
      <h2 className='text-center text-blue-400 text-4xl m-10'>Prossimi incontri</h2>
      <App />
    </div>
  </React.StrictMode>,
)

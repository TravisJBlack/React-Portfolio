import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

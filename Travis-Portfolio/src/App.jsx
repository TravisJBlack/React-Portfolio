
import { Outlet } from 'react-router-dom';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
// import './App.css'

function App() {

  return (
    <div className='flex flex-col bg-black min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App

import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Header = () => {
  const [openNav, setOpenNav] = useState('hidden');

  const toggleNav = () => {
    if (openNav === "hidden") {
      setOpenNav('');
    } else {
      setOpenNav('hidden');
    }
  }

const scrollToTop = () => {
    window.scrollTo(0, 0)
    console.log('working')
}


  return (
   
      <nav className=" top-0 z-50 bg-white border-gray-200 dark:bg-black w-full">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex flex-wrap items-center space-x-3 rtl:space-x-reverse">
            <span className="shadow-lg  shadow-red-500 self-center text-5xl lg:text-6xl  font-semibold whitespace-nowrap text-white dark:text-white">Travis Black</span>
          </div>
          <button data-collapse-toggle="navbar-default" type="button" onClick={() => toggleNav()} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http:/www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${openNav} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">

              <li>
                <Link
                  to='/'
                  onClick={() => toggleNav()}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  About Me
                </Link>
              </li>
              <li>
                <Link
                  to="/Portfolio"
                  onClick={() => {toggleNav(); scrollToTop}}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to='/Contact'
                  onClick={() => toggleNav()}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to='/Resume'
                  onClick={() => toggleNav()}
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-red-700 md:p-0 dark:text-white md:dark:hover:text-red-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    
  )
} 
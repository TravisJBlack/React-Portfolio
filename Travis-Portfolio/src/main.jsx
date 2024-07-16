import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/reset.css'
import './styles/tailwind.css';
import App from './App'
//removed css import of vite created css
// import './index.css'

import ErrorPage from './pages/ErrorPage';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import ContactPage from './pages/ContactPage';
import Resume from './pages/Resume';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <ContactPage />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

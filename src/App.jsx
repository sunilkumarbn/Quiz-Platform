import { createBrowserRouter, RouterProvider } from 'react-router-dom' 
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'  
import Layout from './Components/Layout'
import './App.css'

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: 'about', element: <About /> },
        { path: 'contact', element: <Contact /> }
      ]
    }
  ])

  return <RouterProvider router={router} /> 
}

export default App
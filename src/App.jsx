import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './Home'
import Login from './Login'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<Home />
    },
    {
      path:'/login',
      element:<Login />
    }
  ])

  return (
    <RouterProvider router={routes}/>
  )
}

export default App
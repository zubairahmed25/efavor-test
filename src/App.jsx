import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './assets/css/app.css'
import Home from './Pages/Home'
import Category from './Pages/Category'
import ModelContent from './components/ModelContent'
import { GlobalProvider } from './GlobalContext/Context'
import 'react-loading-skeleton/dist/skeleton.css'
import { loadWebbridge, WebbridgeProvider } from "@tapcart/webbridge-react";

const webbridgeClient = loadWebbridge({ test: false });


function App() {
  const myRoutes = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/category",
      element: <Category />
    },
    {
      path: "/category/:id",
      element: <ModelContent />
    }])
  return (
  <WebbridgeProvider webbridgeClient={webbridgeClient}>
  <GlobalProvider>
    <RouterProvider router={myRoutes} />
  </GlobalProvider>
  </WebbridgeProvider>
  )
}

export default App  
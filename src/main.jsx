import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './component/RootLayout/RootLayout.jsx'
import Home from './component/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    Component: RootLayout,
    children:[
      {
        index: true, Component: Home,
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)

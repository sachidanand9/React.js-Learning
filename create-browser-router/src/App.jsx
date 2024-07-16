import React from 'react'
import { RouterProvider } from 'react-router-dom'
import {router} from "./components/Routes"
import  "./global.css"

const App = () => {
  return  <RouterProvider router={router}/> 
  
}

export default App

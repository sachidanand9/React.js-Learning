import React from 'react'
import Navbar from './components/Navbar'
import Fetchdata from './components/Fetchdata'
import "./global.css"

const App = () => {
  return (
    <div>
        <Navbar/>
        <Fetchdata/>
    </div>
  )
}

export default App
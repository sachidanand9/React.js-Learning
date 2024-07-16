import React, { useState } from 'react'
import Navabar from './Navbar'
import Footer from './Footer'
import Counter from './Counter';

const App = () => {
    console.log(useState());   // [undefined]

    let[state, setState] = useState("hii")
    console.log(state);

    function changeme(){
        console.log("clicked");
        setState("Bye");
    }
  return (  
    <div
    ><h1> I am Parent Comp </h1>
    <Navabar/>
    <Footer/>
    
    <h1>{state}</h1>
    <button onClick={changeme}>Click Me</button>

    <hr /> {/* it is used to draw horizontal line */}

    <Counter/>
        </div>
  )
}

export default App
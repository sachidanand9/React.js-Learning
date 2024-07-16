// import React from 'react'
// import SideEffects from './components/SideEffects'
// import Memo from './components/memoExample/Memo'
// import Callback from './components/Callback'

// function Ap() {
//   return (
//     <div>
//         {/* <SideEffects/> */}
//         {/* <Memo/> */}
//         <Callback/>
//     </div>
//   )
// }

// export default Ap

//----------> for LifeCycleModel <---------

// import React, { useState } from 'react'
// import Counter from './components/lifeCycleMethods/Counter'

// const Ap = () => {
//   let[state, setState]=useState(true);
//   return (
//     <div>
//       {state?<Counter/>:""}
//       <button onClick={()=>setState(!state)}>Toggle</button>
//     </div>
//   )
// }

// export default Ap


//--------> one more way <-----------

import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landingpage from './components/lifeCycleMethods/Landingpage';
import Home from './components/lifeCycleMethods/Home';
const Ap = () => {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/'element={<Landingpage/>}> </Route>
      <Route path='/home'element={<Home/>}> </Route>
     </Routes>
    </BrowserRouter>
  )
}

export default Ap
// import Nav from "./components/Nav";
// import Child from "./components/Child"
// const App = () => {
//     return (
//         <div>
//             {/* <Nav /> */}

//             <Child data = "World"/>
//             <Child data = "Galaxy"/>
//             <Child data = "Universe"/>


//         </div>
//     )

// };
// export default App;

// -----> 25-04-24 <------
import Child1 from "./components/Child1"
import Cbc from "./components/Cbc";
import States from "./components/States";
import Counter from "./components/Counter";

import {useState} from "react";

import StatesAsProp from "./components/StateAsProps";

const App =()=>{
    let [State,setState]=useState([10,20,30,40])
    let value = "WElcome big B"
    return( 
        <div>
            {/* <Child1 data = {value}/> */}
            {/* <Cbc/> */}
            <StatesAsProp data = {State}/>
            <Counter/>
        </div>
    );
};
export default App;
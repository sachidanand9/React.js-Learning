// import Fetchdata from "./components/Fetchdata";
// import "./global.css"

// const Appp=()=>{
//     return(
//         <div>
//             <Fetchdata/>
//         </div>
//     );
// }
// export default Appp;

// let demoRef = useRef();

// let btnClick=()=>{
//     console.log(demoRef); //{current:h1}
//     demoRef.current.style.backgroundColor="red";
// };

// import { useRef } from "react";
// import RefForm from "./components/RefForm";
// import FormsUsingStates from "./components/FormsUsingStates";
// import Calculator from "./components/Calculator";
import Lists from "./components/Lists";
import Forms from "./components/Forms";
import "./appp.css";
const Appp=()=>{

    return(
        <>
        <div className="outerBox">
           <div className="innerBox">
           <Forms/>
           <Lists/>
           </div>
            
        </div>
        </>
    );
}
export default Appp;
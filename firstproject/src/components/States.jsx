import {useState} from "react";
const States =()=>{
    console.log(useState());
    let[data,setData] = useState(10)
    console.log(data);
    function btn() {
        setData("Hello");
        
    }
    return(
        <div>
            <h1>States</h1>
            <button onClick={btn}>Click</button>
        </div>
    );
};
export default States
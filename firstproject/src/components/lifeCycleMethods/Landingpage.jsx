import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Landingpage = () => {
    let navigate = useNavigate();
    useEffect(()=>{
        let nyInterval = setInterval(()=>{
            console.log("Hello");
        },1000)

        return function(){
            clearInterval(nyInterval)
        }
    },[]);
  return (
    <div>
        <h1>Landingpage</h1>
        <button onClick={()=> navigate("/home")}>LOGIN</button>
    </div>
  )
}

export default Landingpage
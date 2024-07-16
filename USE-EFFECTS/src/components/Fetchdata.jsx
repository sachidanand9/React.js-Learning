import React , { useEffect, useState}from 'react'
import axios from "axios"
const Fetchdata = () => {
    let[data,setData]=useState(null);
    useEffect(()=>{
        async function fetchAPI(){
            let resp = await axios.get("https://fakestoreapi.com/products")
            console.log(resp.data);
            setData(resp.data)
        }
        fetchAPI()
    },[]);
  return (
    <div>
        <h1> Products</h1>
        {data?.map((product)=>{
            console.log(product);
        })}
    </div>
  )
}

export default Fetchdata
import { Fragment, useState }from "react";
import content from "../db/db.json";
import DisplayProduct from "./DisplayProduct";


const Fetchdata=()=>{
    console.log(content);
 let [data,setData]=useState(content);
 
    return(
        // <> </> ----> these are called fragment 
        // <Fragment></Fragment> another way to write fragment , they are used to wrap the element 
        <>
            <h1>fetch data comp</h1>
           
            {data.map((product,index)=>{
                console.log(product);
                return<DisplayProduct key={index} data = {product}/>
            })}
        </>
    );
};
export default Fetchdata
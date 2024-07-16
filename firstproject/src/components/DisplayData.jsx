 import style from "./displayData.module.css"
 const DisplayData = ({product})=>{
    let{title,description}=product;
    return(
     <div id ={style.container}>
        <h1>{title}</h1>
        <p>{description}</p>
     </div>
    );

}
export default DisplayData;
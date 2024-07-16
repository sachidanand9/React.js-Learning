const DisplayProduct=(props)=>{
    console.log(props.data);
    let{category,title,id,description,image}=props.data;
    return(

        <div  style={{
                border:"2px solid black",padding:"20px", margin:"20px auto",borderRadius:"10px",boxShadow:"0 0 10px black",
            }}>
           
            <h1>Display Product</h1>
            <h1>{title}</h1>
            <img src={image} alt="" style={{height:"100px", width:"100px"}}/>
            <p>{category}</p>
            <p>{description}</p>
            <h1>{id}</h1>
        </div>
    );
}
export default DisplayProduct
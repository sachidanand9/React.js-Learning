const Child=(props)=>{
 console.log(props.data);
 return(
    <div>
    
        <h1>Hello {props.data}</h1>  {/* We can call the props inside XML we can use by using curly brackets */}
    </div>
 )
};
export default Child;
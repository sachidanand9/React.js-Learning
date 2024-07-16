const StatesAsProp=(props)=>{
    console.log(props.data);
    return(
        <div>
            {/* <h1>{props.data}</h1>// */}
            {props.data.map((ele, i, array)=>{
                console.log(ele);
                return <h1 key={i}>{ele}</h1>    
})}
        </div>

    );
};
export default StatesAsProp;
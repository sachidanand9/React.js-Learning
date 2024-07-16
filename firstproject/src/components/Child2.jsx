const Child2 =(props2)=>{
    console.log(props2);
    let{data2:{data1}}=props2 // This is called props drilling
    console.log(data1);
    return(
        <div>
            <h1>Child 2 component</h1>
        </div>
    );
};
export default Child2;

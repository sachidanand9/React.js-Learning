import Child2 from "./Child2";
const Child1=(props)=>{
    console.log(props); //{data : welcome Big B}
    return(
        <div>
            <h1>Child 1 component</h1>
            <Child2 data ={props}/>
        </div>
    );
};
export default Child1;
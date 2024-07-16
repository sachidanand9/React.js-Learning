import { useState } from "react";
const FormsUsingStates =()=>{
    let [name,setName] = useState("");
    let [email,setEmail] = useState("");
    let [age,setAge] = useState("");

    
    let handleName =(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
    };
    let handleAge =(e)=>{
        console.log(e.target.value);
        setAge(e.target.value);
    };
    let handleEmail =(e)=>{
        console.log(e.target.value);
        setEmail(e.target.value);
    };

    let formHandel =(e)=>{
        e.preventDefault();
        console.log("form submitted");
        console.log({email: email, age:age, name:name});

    };


    return(
        <div>
            <h1> Controlled Forms </h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Enter Your Name " id = "name" value={name} onChange={handleName}/>
                <br />
                <br />
                <label htmlFor="age">Age</label>
                <input type="number" placeholder="Enter Your Age " id = "age" value={age} onChange={handleAge}/>
                <br />
                <br />
                <label htmlFor="Email">Email</label>
                <input type="Email" placeholder="Enter Your Email " id = "Emial" value={email} onChange={handleEmail} />
                <br/>
                <br />
                <button onClick={formHandel}>Submit</button>


            </form>
        </div>
    );
}

export default FormsUsingStates
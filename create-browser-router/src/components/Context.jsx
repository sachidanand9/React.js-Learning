import axios from 'axios';
import React, { createContext, useState } from 'react'
import{v4 as uuidv4} from 'uuid';

export let GLOBALDATA = createContext();
const Context = (x) => {
    // console.log(x);

    let[registerUsers, setregisterUsers]=useState({
        name:"",
        email:"",
        password:"",
        propic:"",
    });

    // creating state for storing loging user

    let[loginUser,setLoginUser]=useState({
     email:"",
     password:""
})
    let registerHandelChange=(e)=>{
        let{name,value}=e.target;
        setregisterUsers({...registerUsers,[name]:value});
    };

    let loginHandelChange=(e)=>{
        let{name,value}=e.target;
        setLoginUser({...loginUser,[name]:value})
    }

    let registerUsersSubmit =(e)=>{
        e.preventDefault();
        console.log(registerUsers);
        axios.post('http://localhost:4000/users',registerUsers).then(()=>{
            console.log("data sent successfully");
            setregisterUsers({
                name:"",
                email:"",
                password:"",
                propic:"",
            })
        }).catch((err)=>{
         console.log(err);
        })
    };
    let loginUserSubmit = async (e)=>{
e.preventDefault();
console.log(loginUser);
try {
   let {data}=await axios.get('http://localhost:4000/users')
   console.log(data,"-----");

   let authUser=data.find((singelUser)=>{
  return singelUser.email===loginUser.email && singelUser.password ===loginUser.password
   })
   console.log(authUser,"*******");

   if (authUser) {
    console.log("LoggedIn");
    window.location.assign("/profile")
    localStorage.setItem("user",JSON.stringify(authUser))
    localStorage.setItem("token", uuidv4())
   }
} catch (error) {
    console.log("Somethimg Went Wrong",error);
}
    }
  return <GLOBALDATA.Provider value ={{registerUsers, setregisterUsers,registerHandelChange ,registerUsersSubmit, loginUser ,loginHandelChange ,loginUserSubmit}}>{x.children}</GLOBALDATA.Provider>
};

export default Context
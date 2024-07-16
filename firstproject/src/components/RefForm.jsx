import { useRef } from "react"
const RefForm =()=>{
    let userEmail = useRef();
    let userPwd = useRef();

    let formHandel =(e)=>{
        e.preventDefault()
        console.log(userEmail.current.value);
        console.log(userPwd.current.value);
    }
      
    return(
        <div>
            <h1> Ref Form </h1>
       

        <form>
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Email" ref={userEmail} />
          <br />
          <br />
          <label htmlFor="">Password</label>
          <input type="text" placeholder="Enter Your Password" ref={userPwd} />
          <br />
          <br />
          <input type="submit" onClick={formHandel}/>
        </form>
        </div>
    );
}
export default RefForm
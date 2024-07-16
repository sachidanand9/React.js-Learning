import style from "./Forms.module.css"
const  Forms = () => {
    return (
      <div id={style.left}>
        <h1> Fill this Form </h1>
          <form>
          <label htmlFor="">Email : </label>
          <input type="text" placeholder="Enter Email"  />
          <br />
          <br />
          <label htmlFor="">Password : </label>
          <input type="text" placeholder="Enter Your Password"  />
          <br />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  };
  
  export default Forms;
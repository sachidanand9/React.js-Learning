import "./App.css"
 let name = "Prince";
function App() {
    return(
        <>
        <nav>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </nav>
        <div className="container">
            <h1>Hello{name}</h1>
           <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores nulla numquam alias deleniti laborum nam fugit? Quas possimus non illum commodi aliquid. Quis reiciendis aliquid delectus sequi alias autem.</p>
        </div>
        </>
    );
    
}
export default App;

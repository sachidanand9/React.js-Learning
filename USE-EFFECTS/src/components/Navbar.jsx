import navStyle from "./nav.module.css"

const Navbar = () => {
  return (
    <nav id={navStyle.navContainer}>
        <aside>Sho<span>place</span></aside>
        <ol>
            <li>Home</li>
            <li>Products</li>
            <li>Login</li>
            <li>SignUp</li>
            <li>Contact Us</li>
        </ol>

    </nav>
  )
}

export default Navbar
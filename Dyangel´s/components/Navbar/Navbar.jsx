
import CartWidget from "../CartWidget/CartWidget"
import logo from "../../src/assets/Logo.png"
import './Navbar.css'

function Navbar() {
    return (

        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="Logo de la pagina"/>
            </div>

            <ul className="menu-links">
                <li className="menu-item"><a href="#">Inicio</a></li>
                <li className="menu-item"><a href="#">Acerca de</a></li>
                <li className="menu-item"><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    )
}

export default Navbar

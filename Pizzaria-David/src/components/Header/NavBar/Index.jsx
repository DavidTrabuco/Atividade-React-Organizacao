import { NavBarStyles } from "./styles.jsx"
import logo from "../../../share/Logo/Logo.png";
import { NavLink } from "react-router";
import { useState } from 'react'
import Login from "../../Login/Login.jsx"; // ✅ 1. importar o modal
 
const links = [
    { nome: "Home", to: "/" },
    { nome: "About Us", to: "/about" },
    { nome: "Menu", to: "/menu" },
    { nome: "App", to: "/app" },
    { nome: "Newsletter", to: "/newsletter" },
    { nome: "Contact", to: "/contact" },
    
]
 
export default function Index() {
 
    const [menuAberto, setMenuAberto] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false) // ✅ 2. estado do modal
    const fecharMenu = () => setMenuAberto(false)
 
    return (
        <>
            <nav className={NavBarStyles.backgroundColor}>
                <ul className={NavBarStyles.default}>
 
                    {/* Logo */}
                    <li>
                        <NavLink to="/">
                            <img src={logo} alt="Logo da Pizzaria" className={NavBarStyles.NavbarLogo} />
                        </NavLink>
                    </li>
 
                    {/* Links desktop */}
                    <li>
                        <ul className={NavBarStyles.navCenter}>
                            {links.map((link) => (
                                <li key={link.to}>
                                    <NavLink to={link.to} className={NavBarStyles.itemMenuTheme}>
                                        {link.nome}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </li>
 
                    <li className={NavBarStyles.buttonGroup}>
                        <NavLink to="/reservation">
                            <button className={NavBarStyles.button}>Reservation</button>
                        </NavLink>
 
                        {/* ✅ 3. botão abre o modal em vez de navegar para /Login */}
                        <button
                            className={NavBarStyles.buttonLogin}
                            onClick={() => setLoginOpen(true)}
                        >
                            Fazer Login
                        </button>
 
                        <button
                            className={NavBarStyles.hamburger}
                            onClick={() => setMenuAberto(!menuAberto)}
                        >
                            <span className={NavBarStyles.hamburgerLine}></span>
                            <span className={NavBarStyles.hamburgerLine}></span>
                            <span className={NavBarStyles.hamburgerLine}></span>
                        </button>
                    </li>
 
                </ul>
 
                {/* Menu mobile */}
                {menuAberto && (
                    <div className={NavBarStyles.mobileMenu}>
                        {links.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                className={NavBarStyles.mobileLink}
                                onClick={fecharMenu}
                            >
                                {link.nome}
                                
                            </NavLink>
                        ))}
                        <a href="/login" className={NavBarStyles.mobileLink} onClick={fecharMenu}>Fazer Login</a>
                        <a href="/reservation" className={NavBarStyles.mobileLink} onClick={fecharMenu}>Fazer Reserva </a>
                    </div>
                )}
            </nav>
 
            
            <Login
                isOpen={loginOpen}
                onClose={() => setLoginOpen(false)}
            />
        </>
    )
}
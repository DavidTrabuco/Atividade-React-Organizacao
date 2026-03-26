import { NavBarStyles } from "./styles.jsx"
import logo from "../../../share/Logo/Logo.png";
import { NavLink } from "react-router";
import { useState } from 'react'

const links = [
   { nome: "Home",       to: "/" },
   { nome: "About Us",   to: "/about" },
   { nome: "Menu",       to: "/menu" },
   { nome: "App",        to: "/app" },
   { nome: "Newsletter", to: "/newsletter" },
   { nome: "Contact",    to: "/contact" },
]

export default function Index() {

    const [menuAberto, setMenuAberto] = useState(false)
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

                    
                    <li>
                        <NavLink to="/reservation">
                            <button className={NavBarStyles.button}>Reservation</button>
                        </NavLink>

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
                    </div>
                )}
            </nav>
        </>
    )
}

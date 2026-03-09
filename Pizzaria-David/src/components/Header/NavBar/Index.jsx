import { NavBarStyles } from "./styles.jsx"
import logo from "../../../share/Logo/Logo.png";
import "./Navbar.css"


// Aqui deu error de export default , mandou pra declarar o reservation fora do NavBar e voltou a funcionar 
const Reservation = () => {
    return (
        <>

            <button className={NavBarStyles.buttonReservation}>Reservation</button>
        </>

    )
}

export default function Index() {



    return (

        <>
            <nav className={NavBarStyles.backgroundColor}>
            <ul className={NavBarStyles.default}>

                
                <li>
                    <img src={logo} alt="Logo da Pizzaria" className={NavBarStyles.NavbarLogo} />
                </li>

                <li>
                    <ul className={NavBarStyles.navCenter}>
                        <li><a href="#" className={`${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`}>Home</a></li>
                        <li><a href="#" className={`${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`}>About Us</a></li>
                        <li><a href="#" className={`${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`}>Menu</a></li>
                        <li><a href="#" className={`${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`}>App</a></li>
                        <li><a href="#" className={`${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`}>Newsletter</a></li>
                        <li><a href="#" className={`${NavBarStyles.itemMenu} ${NavBarStyles.itemTheme}`}>Contact</a></li>
                    </ul>
                </li>

                <li>
                    
                    <Reservation />
                </li>

            </ul>
            </nav >
          //default ele se distribui os 3 grupos ,no caso a logo na esquerda ,os itens no meio  e o botao na direita ,diante disso o nav center deiixa agrupado os links no meio !!!  

        </>


    )
}
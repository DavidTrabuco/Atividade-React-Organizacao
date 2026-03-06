import { NavBarStyles } from "./styles.jsx"
import logo from "../../../share/Logo/Logo.png";


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

                    <img src={logo} alt="Logo da Pizzaria " className={NavBarStyles.NavbarLogo} />

                    <li><a href="#" className={`${NavBarStyles.itemMenu}  ${NavBarStyles.itemTheme}`}>Home</a></li>

                    <li><a href="#" className={`${NavBarStyles.itemMenu}  ${NavBarStyles.itemTheme}`}>About Us</a></li>

                    <li><a href="#" className={`${NavBarStyles.itemMenu}  ${NavBarStyles.itemTheme}`}>Menu</a></li>
                    
                    <li><a href="#" className={`${NavBarStyles.itemMenu}  ${NavBarStyles.itemTheme}`}>App</a></li>
                    
                    <li><a href="#" className={`${NavBarStyles.itemMenu}  ${NavBarStyles.itemTheme}`}>Newsletter</a></li>
                    
                    <li><a href="#" className={`${NavBarStyles.itemMenu}  ${NavBarStyles.itemTheme}`}>Contact</a></li>


                    <li><Reservation /></li>
                </ul>
                  
            </nav>



        </>


    )
}
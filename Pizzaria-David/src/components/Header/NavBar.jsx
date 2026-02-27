// Aqui deu error de export default , mandou pra declarar o reservation fora do NavBar e voltou a funcionar 
const Reservation = () => {
        return (
        <>

        <button>Reservation</button>
        </>
        
        )
    }

export default function NavBar() {

    

    return (

        <>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li>
                        <a href="#">Menu</a>

                    </li>
                    <li>
                        <a href="#">App</a>
                    </li>
                    <li>
                        <a href="#">Newsletter</a>

                    </li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <Reservation />

        </>


    )
}
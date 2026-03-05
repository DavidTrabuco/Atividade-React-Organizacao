  const HourOpen = () => {
        return (
        <div>
            <h3>Pizzaria David </h3>
            <p>Fast Food Restaurant</p>
            <p>Tuesday – Saturday: 12:00pm – 23:00pm<br />Closed on Sunday</p>
            <p>5 star rated on TripAdvisor</p>
        </div>
        )
    }


    const About = () => {
        return (
        <>
            <h4>About</h4>
            <ul>
                <li><a href="#">Fredoka One</a></li>
                <li><a href="#">Special Dish</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </>
        )
    }

    const Menu = () => {
        return (
        <>
        <h4>Menu</h4>
            <ul>
                <li><a href="#">Steaks</a></li>
                <li><a href="#">Burgers</a></li>
                <li><a href="#">Coctails</a></li>
                <li><a href="#">Bar B Q</a></li>
                <li><a href="#">Desserts</a></li>
            </ul></>
        )
    }


    const Newsletter = () => {
        return (
        <>
            <div>
        <h4>Newsletter</h4>
        <p>Get recent news and updates.</p>
        <input type="email" placeholder="Email Address" required />
        <button type="submit">Subscribe</button>
      </div>
        </>
        )
    }

export default function Index() {

 
    
    return (

        <footer>

            <HourOpen />
            <About />
            <Menu />
            <Newsletter />


            <p>© 2024 Pizzaria David . All rights reserved.</p>
            
        </footer>
    )

}

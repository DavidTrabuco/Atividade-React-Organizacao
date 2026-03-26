import { NavLink } from "react-router";
import { ReservationStyle } from "./style";




export default function Reservation() {
    return (
        <>
            <section className={ReservationStyle.section}>
                <div className={ReservationStyle.card}>

                    <p className={ReservationStyle.label}>Pizza House</p>
                    <h1 className={ReservationStyle.title}>Reserva</h1>
                    <div className={ReservationStyle.divider}></div>
                    <h2 className={ReservationStyle.subtitle}>Faça a sua reserva</h2>

                    <div className={ReservationStyle.form}>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Nome</label>
                            <input className={ReservationStyle.input} type="text" placeholder="Em qual nome estará reservado a mesa" />
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Pessoas</label>
                            <input className={ReservationStyle.input} type="number" placeholder="Digite quantas pessoas estarão com vc" />
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Data e Horário</label>
                            <input className={ReservationStyle.input} type="datetime-local" />
                        </div>
                        <div>
                            <label className={ReservationStyle.inputLabel}>Contato</label>
                            <input className={ReservationStyle.input} type="tel" placeholder="(xx) xxxx-xxxx" />
                        </div>

                        <button className={ReservationStyle.button}>Reservar</button>
                    </div>
                    <button className={ReservationStyle.button}><NavLink to="/">Voltar para a página inicial</NavLink></button>


                </div>
            </section>
        </>
    )
}

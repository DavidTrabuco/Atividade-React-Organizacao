import { NavLink } from "react-router";
import { AdminLoginStyle } from "./styles";

export default function AdminLogin() {
    return (
        <>
            <section className={AdminLoginStyle.section}>
                <div className={AdminLoginStyle.card}>

                    <p className={AdminLoginStyle.label}>Pizza House</p>
                    <h1 className={AdminLoginStyle.title}>Área ADM</h1>
                    <div className={AdminLoginStyle.divider}></div>
                    <h2 className={AdminLoginStyle.subtitle}>Acesso restrito a funcionários autorizados</h2>

                    <form className={AdminLoginStyle.form}>
                        <div className={AdminLoginStyle.inputGroup}>
                            <label className={AdminLoginStyle.inputLabel}>Usuário</label>
                            <input
                                className={AdminLoginStyle.input}
                                type="text"
                                placeholder="Digite seu usuário"
                            />
                        </div>
                        <div className={AdminLoginStyle.inputGroup}>
                            <label className={AdminLoginStyle.inputLabel}>Senha</label>
                            <input
                                className={AdminLoginStyle.input}
                                type="password"
                                placeholder="Digite sua senha"
                            />
                        </div>

                        <button className={AdminLoginStyle.button} type="submit">
                            Entrar no Dashboard
                        </button>

                        <NavLink to="/login">
                            <button className={AdminLoginStyle.buttonOutline} type="button">
                                Voltar para o login
                            </button>
                        </NavLink>
                    </form>

                </div>
            </section>
        </>
    )
}

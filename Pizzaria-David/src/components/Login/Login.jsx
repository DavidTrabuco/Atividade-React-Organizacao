import { NavLink } from "react-router";
import { LoginStyle } from "./styles";

export default function Login() {
    return (
        <>
            <section className={LoginStyle.section}>
                <div className={LoginStyle.card}>

                    <p className={LoginStyle.label}>Pizza House</p>
                    <h1 className={LoginStyle.title}>Login</h1>
                    <div className={LoginStyle.divider}></div>
                    <h2 className={LoginStyle.subtitle}>Acesse sua conta para gerenciar suas reservas</h2>

                    <form className={LoginStyle.form}>
                        <div className={LoginStyle.inputGroup}>
                            <label className={LoginStyle.inputLabel}>E-mail</label>
                            <input
                                className={LoginStyle.input}
                                type="email"
                                placeholder="Digite seu e-mail"
                            />
                        </div>
                        <div className={LoginStyle.inputGroup}>
                            <label className={LoginStyle.inputLabel}>Senha</label>
                            <input
                                className={LoginStyle.input}
                                type="password"
                                placeholder="Digite sua senha"
                            />
                            <NavLink to="/cadastro" className={LoginStyle.anchor}>Sua primeira vez - Se cadastre </NavLink>
                        </div>
                         

                        <button className={LoginStyle.button} type="submit">
                            Acessar
                        </button>

                        <NavLink to="/">
                            <button className={LoginStyle.buttonOutline} type="button">
                                Voltar para a página inicial
                            </button>
                        </NavLink>
                    </form>

                    <NavLink to="/admin/login" className={LoginStyle.anchor}>
                        Sou funcionário — acesso administrativo
                    </NavLink>

                </div>
            </section>
        </>
    )
}

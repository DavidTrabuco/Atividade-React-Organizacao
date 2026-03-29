import { useState } from "react";
import { NavLink } from "react-router";
import { ReservationStyle } from "./style";

export default function Reservation() {
    const [nome, setNome] = useState('');
    const [pessoas, setPessoas] = useState('');
    const [dataHorario, setDataHorario] = useState('');
    const [contato, setContato] = useState('');
    const [erros, setErros] = useState({});
    const [enviando, setEnviando] = useState(false)

    function validar() {
        const novosErros = {};

        if (!nome.trim()) {
            novosErros.nome = 'Nome é obrigatório';
        } else if (/\d/.test(nome)) {
            novosErros.nome = 'Nome não pode conter números';
        }

        if (!pessoas) {
            novosErros.pessoas = 'Quantidade de pessoas é obrigatória';
        } else if (Number(pessoas) < 1) {
            novosErros.pessoas = 'Precisa ter pelo menos 1 pessoa';
        } else if (Number(pessoas) > 20) {
            novosErros.pessoas = 'Máximo de 20 pessoas por reserva';
        }

        if (!dataHorario) {
            novosErros.dataHorario = 'Data e horário são obrigatórios';
        } else {
            const dataSelecionada = new Date(dataHorario);
            const agora = new Date();

            if (dataSelecionada < agora) {
                novosErros.dataHorario = 'A data não pode ser no passado';
            } else {
                const hora = dataSelecionada.getHours();
                if (hora < 18 || hora >= 23) {
                    novosErros.dataHorario = 'Horário de funcionamento: 18h às 23h';
                }
            }
        }

        if (!contato.trim()) {
            novosErros.contato = 'Contato é obrigatório';
        } else if (contato.length < 10) {
            novosErros.contato = 'Telefone precisa ter pelo menos 10 dígitos';
        }else if (contato.length > 10){
            novosErros.contato = 'Telefone tem apenas 10 números .'
        }

        return novosErros;
    }

    function handleSubmit(e) {
    e.preventDefault();
    const novosErros = validar();

    if (Object.keys(novosErros).length > 0) {
        setErros(novosErros);
        return;
    }

    setErros({});
    setEnviando(true);

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            pessoas: Number(pessoas),
            dataHorario: dataHorario,
            contato: contato,
        }),
    })
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log('Reserva criada:', dados);
            alert('Reserva feita com sucesso!');
            setNome('');
            setPessoas('');
            setDataHorario('');
            setContato('');
            setEnviando(false);
        })
        .catch((erro) => {
            console.log('Error ao fazer a reserva ', erro);
            alert('Erro ao reservar. Tente novamente!');
            setEnviando(false);
        });
}

    return (
        <>
            <section className={ReservationStyle.section}>
                <div className={ReservationStyle.card}>

                    <p className={ReservationStyle.label}>Pizza House</p>
                    <h1 className={ReservationStyle.title}>Reserva</h1>
                    <div className={ReservationStyle.divider}></div>
                    <h2 className={ReservationStyle.subtitle}>Faça a sua reserva</h2>

                    <form className={ReservationStyle.form} onSubmit={handleSubmit}>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Nome</label>
                            <input
                                className={ReservationStyle.input}
                                type="text"
                                placeholder="Em qual nome estará reservado a mesa"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                            {erros.nome && <span style={{ color: 'red' }}>{erros.nome}</span>}
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Pessoas</label>
                            <input
                                className={ReservationStyle.input}
                                type="number"
                                placeholder="Digite quantas pessoas estarão com vc"
                                value={pessoas}
                                onChange={(e) => setPessoas(e.target.value)}
                            />
                            {erros.pessoas && <span style={{ color: 'red' }}>{erros.pessoas}</span>}
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Data e Horário</label>
                            <input
                                className={ReservationStyle.input}
                                type="datetime-local"
                                value={dataHorario}
                                onChange={(e) => setDataHorario(e.target.value)}
                            />
                            {erros.dataHorario && <span style={{ color: 'red' }}>{erros.dataHorario}</span>}
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Contato</label>
                            <input
                                className={ReservationStyle.input}
                                type="tel"
                                placeholder="(xx) xxxx-xxxx"
                                value={contato}
                                onChange={(e) => setContato(e.target.value)}
                            />
                            {erros.contato && <span style={{ color: 'red' }}>{erros.contato}</span>}
                        </div>

                        <button className={ReservationStyle.button} type="submit" disabled={enviando}>
                            {enviando ? 'Enviando...' : 'Reservar'}
                        </button>
                    </form>
                    <button className={ReservationStyle.button}><NavLink to="/">Voltar para a página inicial</NavLink></button>

                </div>
            </section>
        </>
    )
}
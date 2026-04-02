import { useState, useRef } from "react";
import { NavLink } from "react-router";
import { ReservationStyle } from "./style";
import { mascaraTelefone } from "./utils";
export default function Reservation() {
    const [nome, setNome] = useState('');
    const [pessoas, setPessoas] = useState('');
    const [data, setData] = useState('');
    const [horario, setHorario] = useState('');
    const [contato, setContato] = useState('');
    const [erros, setErros] = useState({});
    const [enviando, setEnviando] = useState(false)
    const dataRef = useRef(null);
    const horarioRef = useRef(null);

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

        if (!data) {
            novosErros.data = 'Data é obrigatória';
        } else {
            const hoje = new Date();
            hoje.setHours(0, 0, 0, 0);
            const dataSelecionada = new Date(data + 'T00:00:00');
            if (dataSelecionada < hoje) {
                novosErros.data = 'A data não pode ser no passado';
            }
        }

        if (!horario) {
            novosErros.horario = 'Horário é obrigatório';
        } else {
            const [hora, minuto] = horario.split(':').map(Number);
            if (hora < 18 || hora >= 23 || (hora === 22 && minuto > 59)) {
                novosErros.horario = 'Horário de funcionamento: 18h às 23h';
            }
            if (data) {
                const agendado = new Date(`${data}T${horario}`);
                if (agendado < new Date()) {
                    novosErros.horario = 'O horário não pode ser no passado';
                }
            }
        }

        if (!contato.trim()) {
            novosErros.contato = 'Contato é obrigatório';
        } else {
            const apenasDigitos = contato.replace(/\D/g, '');
            if (apenasDigitos.length < 10) {
                novosErros.contato = 'Telefone precisa ter pelo menos 10 dígitos';
            } else if (apenasDigitos.length > 11) {
                novosErros.contato = 'Telefone inválido';
            }
        }

        return novosErros;
    }

    function handleSubmit(e) {
    e.preventDefault();
    const novosErros = validar();
    
    const erros = Object.keys(novosErros)
    if (erros.length > 0) {
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
            data: data,
            horario: horario,
            contato: contato,
        }),
    })
        .then((resposta) => resposta.json())
        .then((dados) => {
            console.log('Reserva criada:', dados);
            alert('Reserva feita com sucesso!');
            setNome('');
            setPessoas('');
            setData('');
            setHorario('');
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
                            <label className={ReservationStyle.inputLabel}>Data</label>
                            <input
                                className={ReservationStyle.input}
                                type="date"
                                min={new Date().toISOString().split('T')[0]}
                                value={data}
                                ref={dataRef}
                                onClick={() => dataRef.current.showPicker()}
                                onChange={(e) => setData(e.target.value)}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            {erros.data && <span style={{ color: 'red' }}>{erros.data}</span>}
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Horário</label>
                            <input
                                className={ReservationStyle.input}
                                type="time"
                                min="18:00"
                                max="22:59"
                                value={horario}
                                ref={horarioRef}
                                onClick={() => horarioRef.current.showPicker()}
                                onChange={(e) => setHorario(e.target.value)}
                                onKeyDown={(e) => e.preventDefault()}
                            />
                            {erros.horario && <span style={{ color: 'red' }}>{erros.horario}</span>}
                        </div>
                        <div className={ReservationStyle.inputGroup}>
                            <label className={ReservationStyle.inputLabel}>Contato</label>
                            <input
                                className={ReservationStyle.input}
                                type="tel"
                                placeholder="(XX) XXXXX-XXXX"
                                value={contato}
                                onChange={(e) => setContato(mascaraTelefone(e.target.value))}
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
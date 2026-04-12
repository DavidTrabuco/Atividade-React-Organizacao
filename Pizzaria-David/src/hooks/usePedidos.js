import { useState, useMemo } from 'react';

export function usePedidos() {
    const [nomeCliente, setNomeCliente] = useState('');
    const [itens, setItens] = useState([]);
    const [erros, setErros] = useState({});
    const [enviando, setEnviando] = useState(false);
    const [pedidoConfirmado, setPedidoConfirmado] = useState(null);

    const totalCalculado = useMemo(
        () => itens.reduce((acc, item) => acc + item.preco, 0),
        [itens]
    );

    function adicionarItem(nome, preco) {
        setItens([...itens, { nome, preco }]);
    }

    function removerItem(index) {
        setItens(itens.filter((_, i) => i !== index));
    }

    function validar() {
        const novosErros = {};

        if (!nomeCliente.trim()) {
            novosErros.nomeCliente = 'Nome é obrigatório';
        } else if (/\d/.test(nomeCliente)) {
            novosErros.nomeCliente = 'Nome não pode conter números';
        }

        if (itens.length === 0) {
            novosErros.itens = 'Selecione pelo menos um item do menu';
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

        fetch('http://localhost:3000/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomeCliente,
                itens: itens.map((i) => i.nome),
                total: totalCalculado,
                status: 'pendente',
            }),
        })
            .then((resposta) => resposta.json())
            .then((dados) => {
                setPedidoConfirmado(dados);
                setEnviando(false);
            })
            .catch((erro) => {
                console.log('Erro ao fazer o pedido:', erro);
                alert('Erro ao realizar pedido. Tente novamente!');
                setEnviando(false);
            });
    }

    return {
        nomeCliente, setNomeCliente,
        itens, adicionarItem, removerItem,
        totalCalculado,
        erros, enviando, handleSubmit, pedidoConfirmado,
    };
}

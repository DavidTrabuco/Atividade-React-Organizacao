import { useState, useMemo } from 'react';

export function usePedidos() {
    const [nomeCliente, setNomeCliente] = useState('');
    const [itens, setItens] = useState([]);
    const [erros, setErros] = useState({});
    const [enviando, setEnviando] = useState(false);
    const [pedidoPendente, setPedidoPendente] = useState(null);
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

    // Etapa 1: valida o pedido e avança para o pagamento
    function handleSubmit(e) {
        e.preventDefault();
        const novosErros = validar();

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});
        setPedidoPendente({
            nomeCliente,
            itens: itens.map((i) => i.nome),
            itensDetalhes: itens,
            total: totalCalculado,
            status: 'pendente',
        });
    }

    // Etapa 2: recebe dados do pagamento, envia pedido ao backend e confirma
    function handlePagamento(dadosPagamento) {
        setEnviando(true);

        fetch('http://localhost:3000/pedidos', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomeCliente: pedidoPendente.nomeCliente,
                itens: pedidoPendente.itens,
                total: pedidoPendente.total,
                status: 'confirmado',
                pagamento: dadosPagamento,
            }),
        })
            .then((resposta) => resposta.json())
            .then((dados) => {
                setPedidoConfirmado({ ...dados, status: 'confirmado' });
                setEnviando(false);
            })
            .catch((erro) => {
                console.log('Erro ao confirmar pagamento:', erro);
                alert('Erro ao processar pagamento. Tente novamente!');
                setEnviando(false);
            });
    }

    function cancelarPagamento() {
        setPedidoPendente(null);
    }

    return {
        nomeCliente, setNomeCliente,
        itens, adicionarItem, removerItem,
        totalCalculado,
        erros, enviando,
        handleSubmit,
        pedidoPendente, handlePagamento, cancelarPagamento,
        pedidoConfirmado,
    };
}

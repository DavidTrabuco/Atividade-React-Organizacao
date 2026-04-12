import { useState } from 'react';

export default function usePagamento(onConfirmar) {
    const [cardHolder, setCardHolder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [erros, setErros] = useState({});

    function validarPagamento() {
        const novosErros = {};

        if (!cardHolder.trim()) {
            novosErros.cardHolder = 'Nome do titular é obrigatório';
        }

        const numeroLimpo = cardNumber.replace(/\s/g, '');
        if (!numeroLimpo || numeroLimpo.length < 13 || numeroLimpo.length > 19) {
            novosErros.cardNumber = 'Número do cartão inválido';
        }

        if (!expiryDate.trim() || !/^\d{2}\/\d{2}$/.test(expiryDate)) {
            novosErros.expiryDate = 'Data de validade inválida (MM/AA)';
        }

        if (!cvv.trim() || cvv.length < 3) {
            novosErros.cvv = 'CVV inválido';
        }

        return novosErros;
    }

    function handleSubmit(e) {
        e.preventDefault();
        const novosErros = validarPagamento();

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});
        onConfirmar({
            metodo: 'cartao_credito',
            titular: cardHolder,
        });
    }

    function formatarCartao(valor) {
        const limpo = valor.replace(/\D/g, '').slice(0, 16);
        return limpo.replace(/(.{4})/g, '$1 ').trim();
    }

    function formatarValidade(valor) {
        const limpo = valor.replace(/\D/g, '').slice(0, 4);
        if (limpo.length >= 3) return limpo.slice(0, 2) + '/' + limpo.slice(2);
        return limpo;
    } 
    
    return {
        cardHolder,
        setCardHolder,
        cardNumber,
        setCardNumber,
        expiryDate,
        setExpiryDate,
        cvv,
        setCvv,
        erros,
        setErros,
        validarPagamento,
        handleSubmit,
        formatarCartao,
        formatarValidade
    }
}
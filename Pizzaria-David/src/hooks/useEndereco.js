import { useState, useEffect } from 'react';

export function useEndereco() {
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEndereco = async () => {
      try {
        const response = await fetch('http://localhost:3000/enderecos');
        if (!response.ok) {
          throw new Error('Falha ao buscar os endereços da API');
        }
        const data = await response.json();
        
        // Pega o primeiro endereço se a lista de endereços não for vazia
        if (data && data.length > 0) {
          setEndereco(data[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEndereco();
  }, []);

  return { endereco, loading, error };
}

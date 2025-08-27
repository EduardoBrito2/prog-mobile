import React, { createContext, useState, ReactNode } from 'react';
import { getCepData } from '../services/ViaCepService';
import { CepData } from '../types/CepTypes';

interface CepContextType {
  cep: string;
  setCep: React.Dispatch<React.SetStateAction<string>>;
  data: CepData | null;
  loading: boolean;
  error: string | null;
  fetchCep: (cep: string) => void;
  history: CepData[]; // Histórico de consultas
}

export const CepContext = createContext<CepContextType | undefined>(undefined);

interface CepProviderProps {
  children: ReactNode;
}

export const CepProvider = ({ children }: CepProviderProps) => {
  const [cep, setCep] = useState<string>('');
  const [data, setData] = useState<CepData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<CepData[]>([]); // Armazenar o histórico

  const fetchCep = async (cep: string) => {
    setLoading(true);
    setError(null);
    try {
      const result = await getCepData(cep);
      
      // Se o retorno tiver erro, mostra a mensagem de erro
      if (result.erro) {
        setError('CEP inválido');
        return;
      }

      setData(result);
      
      // Adiciona o CEP válido ao histórico
      setHistory(prevHistory => [...prevHistory, result]);
    } catch (error) {
      setError('Erro ao consultar o CEP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <CepContext.Provider value={{ cep, setCep, data, loading, error, fetchCep, history }}>
      {children}
    </CepContext.Provider>
  );
};

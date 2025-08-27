import axios from 'axios';
import { CepData } from '../types/CepTypes';

const baseURL = 'https://viacep.com.br/ws';

export const getCepData = async (cep: string): Promise<CepData> => {
  try {
    const response = await axios.get(`${baseURL}/${cep}/json/`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao consultar o CEP');
  }
};

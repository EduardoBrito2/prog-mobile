import { useContext } from 'react';
import { CepContext } from '../context/CepContext';


const useCep = () => {
  const context = useContext(CepContext);
  if (!context) {
    throw new Error('useCep must be used within a CepProvider');
  }
  return context;
};

export default useCep;

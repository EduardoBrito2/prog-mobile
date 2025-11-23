import express from 'express';
import cors from 'cors';
import router from './routes';
import { initializeDatabase } from './config/init';


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Rotas
app.use('/api', router);

// Inicializar DB e iniciar servidor
initializeDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
});

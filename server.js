import 'dotenv/config'; // Carrega as variáveis de ambiente do arquivo .env
import app from './src/app.js';

// Define a porta em que a aplicação irá escutar
const PORT = process.env.PORT ?? 3000;

// Inicia o servidor Express na porta especificada
app.listen(PORT, () => {
    console.log(`Escutando na porta ${PORT}`);
});

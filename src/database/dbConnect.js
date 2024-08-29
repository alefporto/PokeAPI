import mongoose from 'mongoose';

// Pega a string de conexão a partir das variáveis de ambiente
const uri = process.env.MONGO_URI; 
console.log(uri);
// Estabelece conexão com o database MongoDB usando a URI
mongoose.connect(uri);

// Pega o objeto que representa a conexão ativa com o database 
let connection = mongoose.connection;

// Adiciona listeners para os eventos de conexão e erro do database
connection.on("error", (err) => { console.error(`Erro ao tentar se conectar ao banco de dados: ${err.message}`); });
connection.once("open", () => { console.log("Conexão com o banco de dados estabelecida com sucesso"); });

import mongoose from 'mongoose';

const uri = process.env.MONGO_URI;

mongoose.connect(uri);

let connection = mongoose.connection;

connection.on("error", (err) => { console.error(`Erro ao tentar se conectar ao banco de dados: ${err.message}`); });
connection.once("open", () => { console.log("Conexão com o banco de dados estabelecida com sucesso"); });

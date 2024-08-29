<h1 align="center">
    <img alt="Pokedex" title="#Pokedex" src="./assets/Pok_dex_logo.png" />
</h1>

<h4 align="center"> 
	Pokedex em construção... 
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/badge/languages-1-green">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/alefporto/PokeAPI ">
	  
  <a href="https://github.com/tgmarinho/nlw1/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alefporto/PokeAPI">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/alefporto/PokeAPI?tab=MIT-1-ov-file#">

   <img alt="Stargazers" src="https://img.shields.io/github/stars/alefporto/PokeAPI?style=social">
  </a>
</p>


## Sobre o projeto

Uma API REST de gerenciamento de Pokémons e persistência de dados, feita na disciplina de Desenvolvimento de Software para WEB.

API REST utilizando NodeJS.

Métodos CRUD:
- GET /pokemons → Retorna todos os Pokémons.
- GET /pokemons/:id → Retorna o Pokémon com ID informado.
- POST /pokemons → Adicionar um novo Pokémon.
- PUT /pokemons:/:id → Substitui um Pokémon existente no banco de dados.
- DELETE /pokemons/:id → Remove um Pokémon.


Um Pokémon tem os atributos: 
- Nome
- Número
- Tipo
- Imagem. 


Persistência de dados utilizando MongoDB com Mongoose

Deploy da aplicação na plataforma Vercel.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [JavaScript][javascript]
- [Express][express]
- [MongoDB][mongodb]
- [Mongoose][mongoose]
- [Nodemon][nodemon]
- [Dotenv][dotenv]

## Licença

Este projeto esta sobe a licença MIT.

Feito por Alef Porto e Rodrigo Lima


[javascript]: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript
[nodejs]: https://nodejs.org/
[express]: https://expressjs.com/pt-br/
[mongodb]: https://www.mongodb.com/
[mongoose]: https://mongoosejs.com/
[nodemon]: https://www.npmjs.com/package/nodemon
[dotenv]: https://www.npmjs.com/package/nodemon
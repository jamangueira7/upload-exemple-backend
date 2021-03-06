<h1 align="center">
    <img alt="Rocketseat" title="Rocketseat" src=".github/rocketseat.png" width="60px" />
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-rodar">Como rodar</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;
</p>
<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />
</p>

<br>

# Upload exemple backend

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/) - v14.4.0
- [Yarn](https://yarnpkg.com/) - 1.22.4
- [Npm](https://www.npmjs.com/) - 6.14.5
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/3)


## 💻 Projeto
API para gravação de arquivo de imagem no banco e fisicamente no projeto.

Esse projeto foi feito acompanhando a video aula do Youtube, [clique aqui](https://www.youtube.com/watch?v=MkkbUfcZUZM) para acessar.

## 🚀 Como Rodar

- Clone o projeto.
- Roder o comando "yarn install" para instalar as dependências.
- Rodar o MongoDB com docker: docker run --name mongodb -p 27017:27017 -d -t mongo
- "yarn dev" para executar o proejto.
- Para testar a API acesse localhost:3000.

## 👩🏿‍💻 Rotas

- **`POST /posts`**: Rota para gravar imagens;
Envio
```
{
    file: file.jpg
}
```

Retorno
```
{
    "_id": "6043f4982d5428380c8bdcad",
    "name": "file.png",
    "size": "815096",
    "key": "62356b77f693c2861dd1d61f4e68f968-file.png",
    "url": "",
    "createdAt": "2021-03-06T21:31:04.580Z",
    "__v": 0
}
```

## 🤔 Como contribuir

- Faça um fork desse repositório;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request for feito, você pode deletar a sua branch.


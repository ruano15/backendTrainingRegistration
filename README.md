## Backend para de treinos

O intuito da criação desse projeto foi estudar a criação e deploy de uma aplicação backend utilizando javascript com express e o banco de dados MongoDB, utilizando como gerenciador o Mongo Atlas e fazendo seu deploy na Vercel

## Instalação

Clonagem do pedido

```Clonar o projeto
# using git bash
git clone https://github.com/ruano15/backendCadstroDeUsuario.git
```

Instalação das dependencias do projeto

```instalar as dependencias
# using npm
npm install
```

Start do servidor

```
# prompt de comando
npm start
```

## Funcionalidades

Aplicação simples para cadastro de treino e exercicios do treino.

//Workouts Routes
GET - /workouts - retorna todos os treinos cadastrados no banco
POST - /workouts - cadastra um novo treino
GET - /workouts/:id - retorna um treino especifico
PUT - /workouts/:id - altera o nome e o dia de treino
DELETE - /workouts/:id - deleta o treino e todos os exercicios assoiados a ele

//Exercicies Routes
GET - /exercicies - retorna todos os exercicios cadastrados no banco
GET - /exercicies/search?workoutId=:id - retorna todos os exercicios relacionados a um treino especifico
POST - /exercicies - cadastra um novo exercicio
GET - /exercicies/:id - retorna um exercicio especifico
PUT - /exercicies/:id - altera todos os elementos do treino, exceto sua relação com o treino
DELETE - /exercicies/:id - deleta o exercicio

## Tecnologias

#JavaScript #Express #Nodemon #MongoDB #MongoAtlas #Vercel

## Status do Projeto

O projeto esta finalizado, como mencionado anteriormente, consiste apenas em um CRUD simples

## Redes Sociais

[LinkedIn](https://www.linkedin.com/in/lucasruano/)<br/>
[Github](https://github.com/ruano15)<br/>
[Vitrine Dev](https://cursos.alura.com.br/vitrinedev/lucas-ruano15)<br/>

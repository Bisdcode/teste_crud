import { useEffect, useState } from 'react';
//{useState} serve para gerenciar o estado
import "./styles/App.css";
import Todo from "./components/Todo.js";
import TodoForm from './components/TodoForm.js';
import Search from './components/Search.js';

import axios from "axios";

function App() {
  // const [todos, setTodos] = useState ([ //definindo os "todos" em um State (como se fosse uma chamada de API do banco de dados). Permite a renderização assim que atualiza o estado.
    //As variaveis não são recomendadas pq não renderizam assim que são atualizadas
    
// {
//   id:1,
//   text: "Criar funcionalidade x no sistema",
//   category: "Trabalho",
//   isCompleted: false,
// },
// {
//   id:2,
//   text: "Ir pra academia",
//   category: "Pessoal",
//   isCompleted: false,
// },
// {
//   id:3,
//   text: "Estudar React",
//   category: "Estudos",
//   isCompleted: false,
// }
//   
// ])//Esses dados não são necessários manter

  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  // const [search, setSearch] = useState("")//Vai usar?

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a,b) => (a.text > b.text ? 1 : -1))); //vai pegar a lista de usuarios e expor em ordem alfabética
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]); //recarregando o "getUsers" sempre que criar um usuario "setUsers"

  // //Funcao para adicionar um To.do
  // const addTodo = (text, category) => {
  //   const newTodos = [
  //     ...todos,  //recebe todos os "todos" atuais
  //     {
        
  //     id: Math.floor(Math.random() * 10000), //gerar numero aleatorio para o 'id'
  //     text,
  //     category,
  //     isCompleted: false,
  //   },
  // ];
  
  // //atualizar o estado dos To.do's
  // setTodos(newTodos)
  // }

  //função remover To.do
  // const removeTodo = (id) => {
  //   const newTodos = [...todos]

  //   //O filter não altera a lista original, então é necessário uma nova variável
  //   const filteredTodos = newTodos.filter((todo) => 
  //     //o 'todo.id' que for diferente que o 'id' informado, voltara para lista, o semelhante será 'nulo'
  //     todo.id !== id ? todo : null
  // )
  // setTodos(filteredTodos)
  // }

  // //função completar To.do
  // const completeTodo = (id) => {
  //   const newTodos = [...todos]

  //   //o map pode alterar a lista diretamente (diferente do filter)
  //   // se o "todo.id" for igual, pega o "isCompleted" e recebe o contrário do valor booleano, senão, recebe o mesmo todo
  //   newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted: todo)
  //   setTodos(newTodos)
  
  return (
    // elemento-pai para estilizar o app
    <div className='app'>
    
    <h1>Lista de Tarefas</h1>

    {/* componente search pode mudar o State */}
    {/* <Search search={search} setSearch={setSearch}/> */}
   
    {/* Estilização dos "todos" */}
    <div className="todo-list">

      <Todo users={users} setUsers={setUsers}/>

      {/* Vamos usar um map para percorrer nos "todos" */}
      {/* A funcionalidade do "search" tbm se encontra aqui, atraves do "filter" */}
      {/* Nesse filtro, ele vai analisar o texto dos todos em minusculo e conferir se algum dado é semelhante ao que está incluso no "search" */}

      {/* **** MAP ANTIGO */}

      {/* {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map((todo) => (
        <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}
        /> 
        //As props estão recebendo os componentes e funções      
        ))} */}


    </div>

    {/* Formulário de adição de tarefas */}
    {/* Passando o "addTodo" como propriedade para o formulário */}
    <TodoForm/>
   </div>
   
  );
}
  //digitando '.todo-list' voce gera rapidamente uma 'div class para estilização'
// }

export default App;

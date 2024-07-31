import { useEffect, useState } from 'react';
//{useState} serve para gerenciar o estado
import "./styles/App.css";
import Todo from "./components/Todo.js";
import TodoForm from './components/TodoForm.js';

import axios from "axios";

function App() {
  
  const [users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data); 
      // setUsers(res.data.sort((a,b) => (a.text > b.text ? 1 : -1))); //vai pegar a lista de usuarios e expor em ordem alfabética
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]); 

  return (
    // elemento-pai para estilizar o app
    <div className='app'>
    
    <h1>Lista de Tarefas</h1>

    {/* Estilização dos "todos" */}
    <div className="todo-list">

      <Todo users={users} setUsers={setUsers} setOnEdit={setOnEdit}/>

    </div>

    {/* Formulário de adição de tarefas */}
    <TodoForm onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers}/>
   </div>
  );
};

export default App;

import React from 'react';
import axios from "axios";

// componente para organizar a disposição das tarefas

// As props "todo, removeTodo, completeTodo" vem atraves de argumentos

const Todo = ({users, setUsers}) => {

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/" + id)

      // validação da função
      .then(({ data }) => {
        const newArray = users.filter((user) => user.id !== id);// criando uma Array com filtro de todos os elementos diferentes do informado

        setUsers(newArray);
        console.log(data);
      })
      .catch(({ data }) => console.log(data));

  }

  return (
    // Estilo para "todos"
    // o "style" cria um visual especifico para as tarefas completadas
     <div>

        {users.map((item, i) => (        
          <div key={i} className="todo" style={{textDecoration: item.is_completed ? "line-through"  : ""}}>
            <div>
              <div>
                {item.text}
              </div>
              <div>
              {item.category}
              </div>
            </div>
            <button className='complete'>Completar</button>

            <button className='remove' onClick={() => handleDelete(item.id)}>X</button>
          </div>


        ))}



        {/* Estilo para "content" */}
        {/* <div className="content"> */}

          {/* mostrar o "testo" do "todo" */}
          {/* <p>{todo.text}</p> */}

          {/* <p className="category"> */}
          
            {/* mostrar a "categoria" do todo */}
            {/* ({todo.category}) */}
          {/* </p>
        </div> */}
        {/* <div> */}
          
          {/* a função é acionada no "onClick" */}
          {/* <button className='complete'onClick={() => completeTodo(item.i)}>Completar</button> */}

          {/* a função é acionada no "onClick" */}
          {/* <button className='remove' onClick={() => removeTodo(item.i)}>X</button> */}
        {/* </div> */}
      </div> 
      
  )
}

export default Todo;

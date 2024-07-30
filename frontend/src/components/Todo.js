import React from 'react';
import axios from "axios";

// componente para organizar a disposição das tarefas

// As props "todo, removeTodo, completeTodo" vem atraves de argumentos

const Todo = ({users}) => {
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

            <button className='remove'>X</button>
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

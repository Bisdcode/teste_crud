import React from 'react';
import axios from "axios";
// componente para organizar a disposição das tarefas

const Todo = ({users, setUsers, setOnEdit}) => {

  // função para realizar o deleteUser
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
      
      setOnEdit(null);
    };
    
  // função para updateUser
  const handleEdit = (item) => {
    setOnEdit (item);
  };
    
  return (
    <div>
        {users.map((item, i) => (        
          <div key={i} className="todo">
            <div>
              <div>
                <div>
                  {item.text}
                </div>
                <div>
                  {item.category}
                </div>
              </div>
            </div>

            <button className='edit' onClick={() => handleEdit(item)}>Editar</button>

            <button className='remove' onClick={() => handleDelete(item.id)}>X</button>
          </div>
        ))}
    </div> 
      
  )
}

export default Todo;

import axios from "axios";
import React, {useEffect, useRef} from 'react';

// Formulario de adição de tarefas

const TodoForm = ({getUsers, onEdit, setOnEdit}) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) { //se tem um item de edição
      const user = ref.current;

      user.text.value = onEdit.text;
      user.category.value = onEdit.category;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();//para não recarregar a pagina

    const user = ref.current;

    if (
      !user.text.value ||
      !user.category.value
    ) {
      return console.log("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          text: user.text.value,
          category: user.category.value,
        })
        .then(({ data }) => console.log(data))
        .catch(({ data }) => console.log(data));
    } else {//se não for um item de edição
      await axios
        .post("http://localhost:8800", {
          text: user.text.value,
          category: user.category.value,
        })
        .then(({ data }) => console.log(data))
        .catch(({ data }) => console.log(data));
    }

    user.text.value = "";
    user.category.value = "";

    setOnEdit(null);
    getUsers();
  };

  return (
    <div className='todo-form'>
      <h2>Criar tarefa</h2>

      {/* onSubmit vai disparar o "handleSubmit" */}
      <form ref={ref} onSubmit={handleSubmit}>

        {/* inserir dados */}
        <input name="text" type="text" placeholder='Digite o título'/>

        {/* selecionar a categoria */}
        <select name="category">
            <option value="">Selecione uma categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Estudos">Estudos</option>
        </select>
        
        {/* enviar tarefa */}
        <button type='submit'>Criar tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm

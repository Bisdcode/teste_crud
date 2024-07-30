import React, {useRef} from 'react'; //*** PROJETO NOVO */

// Formulario de adição de tarefas
//{useState} serve para gerenciar o estado

const TodoForm = ({onEdit}) => {
  
  //****PROJETO VELHO  */

  // // gerenciar os dados de "titulo" e "categoria"
  //   const [value, setValue] = useState("")
  //   const [category, setCategory] = useState("")


  
  //   //funcão que vai cuidar do submit do formulario
  //   const handleSubmit = (e) => {
  //     //O formulario nao sera enviado da forma tradicional
  //     e.preventDefault(); //argumento de evento
        
  //       if (!value || !category) return; //evitar erro caso não tenha dados preenchidos

  //       //adicionar 'todo'
  //       addTodo(value, category)
  //       //limpar os campos
  //       setValue("");
  //       setCategory("");
  // }

  const ref = useRef(); //*** PROJETO NOVO

  return (
    <div className='todo-form' ref={ref}>
      <h2>Criar tarefa</h2>
      {/* Formulário */}
      {/* onSubmit vai disparar o "handleSubmit" */}
      <form ref={ref}>

        {/* inserir dados */}
        <input name="text" type="text" placeholder='Digite o título'
        // value={value} //conectando o state ao atributo de valor do campo (tornando possivel "limpar" os campos apos o submit)
        
        // onChange "assim que mudar o valor", acionar a funcao
          //e(evento) target(input) value(valor/texto do input)
        // onChange={(e) => setValue(e.target.value)} 
        />

        {/* selecionar a categoria */}
          {/* e(evento) target(input) value(categoria do input) */}
        <select name="category"
        // value={category} 
        
        // onChange={(e) => setCategory(e.target.value)}
        >
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

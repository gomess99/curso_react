import { useState, FormEvent } from "react";

  export default function App(){
    const [input, setInput] = useState ("");
    const [tasks, setTasks] = useState([
      'Estudar React com TypeScript',
      'Comprar pão',
      'Estudar ingles a noite'
    ])

  function handleRegister(){
    if(!input){
      alert("Preencha o nome da tarefa")
      return;
    }

    setTasks( tarefas =>[...tarefas, input]) //adiciona o que já esta na lista
    setInput("")
  }  

  return (
    <div> 
      <h1>Lista de tarefas</h1>
      <input type="text"
        placeholder="Digite o nome da tarefa..."
        value={input}
        onChange={ (e) => setInput(e.target.value)}
      />

      <button onClick={handleRegister}>Adicionar tarefa</button>
      <hr />
      {tasks.map( (item, index) => (
          <section key ={index}>
          <span>{item}</span>
          <button>Exlucir</button>
        </section>
      ))}
    </div>
  );
}


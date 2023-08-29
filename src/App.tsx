
import { useState } from "react"

export default function App(){
  const [input, setInput] = useState("")
  const [idade, setIdade] = useState("")
  const [aluno, setAluno] = useState("Digite no campo a cima")
  //aqui está send exportando por padrão (usando export default) uma função chamada App. Essa função é o componente principal do aplicativo

  function mostrarAluno(){
    
    setAluno(input);
  }

  return(
    //O componente 'App' retorna um JSX (JavaScript XML), que é uma sintaxe semelhante ao HTML usado pelo React para descrever a estrutura da interface do usuário. 
    <div>
      <h1>
        Conhecendo useStates
      </h1>

      <input
        placeholder="Digite o nome" 
        value={input}
        onChange={ (e) => setInput(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Digite a idade" 
        value={idade}
        onChange={ (e) => setIdade(e.target.value)}
      />

      <br />
      <br />

      <button onClick={mostrarAluno}>Mostrar Aluno</button>

      <hr />

      <h3>Bem vindo: {aluno}</h3>
    </div>
  )
}




import { useState } from "react"

interface UserProps{
  nome: string;
  cargo: string;
}

export default function App(){

  const [user, setUser] = useState <UserProps>({
    nome: "Visitante",
    cargo: ""
  })

  function handleLogin(){
    setUser({
      nome: "Sujeito",
      cargo: "Programador"
    })
  }

  function handleLogout(){
    setUser({
      nome: "Visitante",
      cargo: ""
    })
  }

  return(
    
    <div>
      <h1>
        Conhecendo useStates
      </h1>
      <button onClick={handleLogin}>
        Entrar
      </button>
      <button onClick={handleLogout}>
        Sair
      </button>
      <h4>{user.nome}</h4>
      <strong>{user.cargo}</strong>
    </div>
  );
}



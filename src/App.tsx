import { Header } from "./components/header";
import { Aluno } from "./components/aluno";
import { Footer } from "./components/footer";

export default function App(){
  //aqui está send exportando por padrão (usando export default) uma função chamada App. Essa função é o componente principal do aplicativo

  return(
    //O componente 'App' retorna um JSX (JavaScript XML), que é uma sintaxe semelhante ao HTML usado pelo React para descrever a estrutura da interface do usuário. 
    <div>
      <Header title="Curso React + TypeScript"/>

      <Aluno nome="Carlos Gomes" idade={52}/>

      <Aluno nome="Gabriel Gomes" idade={20}/>

      <Aluno nome="Cleusa Gomes" idade={51}/>

      <Footer/>
    </div>
  )
}



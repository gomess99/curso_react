export default function App(){
  //aqui está send exportando por padrão (usando export default) uma função chamada App. Essa função é o componente principal do aplicativo

  return(
    //O componente 'App' retorna um JSX (JavaScript XML), que é uma sintaxe semelhante ao HTML usado pelo React para descrever a estrutura da interface do usuário. 
    <div>
      <h1>
        Meu Projeto
      </h1>
      <Aluno nome="Carlos Gomes" idade={52}/>
      <Aluno nome="Gabriel Gomes" idade={20}/>
      <Aluno nome="Cleusa Gomes" idade={51}/>
    </div>
  )
}

interface AlunoProps{
  //Aqui se define uma interface chamada AlunoProps. Essa interface descreve a forma esperada dos atributos passados ​​para o componente Aluno
  nome: string;
  idade: number;
}

function Aluno({ nome, idade }:AlunoProps){
  return(
    <div>
      <h1>Aluno: {nome}</h1>
      <h3>Idade: {idade}</h3>
    </div> 
  )
}

interface AlunoProps{
    //Aqui se define uma interface chamada AlunoProps. Essa interface descreve a forma esperada dos atributos passados ​​para o componente Aluno
    nome: string;
    idade: number;
}
  
export function Aluno({ nome, idade }:AlunoProps){
    return(
      <div>
        <h1>Aluno: {nome}</h1>
        <h3>Idade: {idade}</h3>
      </div> 
    )
}
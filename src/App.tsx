import { useState, FormEvent } from "react";

import "./App.css";

import logoImg from "./assets/logo.png";

/*
  Calculo: alcool / gasolina
  E se o resultado for menor que 0.7 conpesa usar alcool
*/

interface InfoProps {
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {
  const [gasolinaIput, setGasolinaInput] = useState(1);
  const [alcoolIput, setAlcoolInput] = useState(1);
  const [info, setInfo] = useState<InfoProps>();

  function calcular(event: FormEvent) {
    event.preventDefault(); //ele previne a restauração dos dados após o ok do alert

    let calcular = alcoolIput / gasolinaIput;

    if (calcular <= 0.7) {
      setInfo({
        title: "Compensa usar alcool",
        gasolina: formatarMoeda(gasolinaIput),
        alcool: formatarMoeda(alcoolIput),
      });
    } else {
      setInfo({
        title: "Compensa usar gasolina",
        gasolina: formatarMoeda(gasolinaIput),
        alcool: formatarMoeda(alcoolIput),
      });
    }
  }

  function formatarMoeda(valor: number){
    let valorFormatado = valor.toLocaleString("pt-br",{
      style: "currency",
      currency: "BRL"
    })

    return valorFormatado;
  }

  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} alt="Logo" />
        <h1 className="title">Qual melhor opção?</h1>

        <form className="form" onSubmit={calcular}>
          <label htmlFor="">Alcool (preço por litro):</label>
          <input
            type="number"
            className="input"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={alcoolIput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />
          <label htmlFor="">Gasolina (preço por litro):</label>
          <input
            type="number"
            className="input"
            placeholder="4,90"
            min="1"
            step="0.01"
            required
            value={gasolinaIput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />
          <input className="button" value="Calculadora" type="submit" />
        </form>
        {/* aqui ele faz a busca se houver um valor em infoInput ele redenrinza a section */}
        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info.title}</h2>
            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;

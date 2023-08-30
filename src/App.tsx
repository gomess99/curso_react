

import './App.css'

import logoImg from './assets/logo.png'

function App(){
  return(
    
    <div>
      <main className='container'>
        <img
        className='logo'
         src={logoImg}
         alt="Logo" 
        />
        <h1 className='title'>Qual melhor opção?</h1>

        <form className='form'>
          <label htmlFor="">
            Alcool (preço por litro):
          </label>
          <input
            type="number" 
            className='input'
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />
          <label htmlFor="">
            Gasolina (preço por litro):
          </label>
          <input
            type="number" 
            className='input'
            placeholder='4,90'
            min="1"
            step="0.01"
            required
          />
          <input
           className='button'
           value="Calculadora"
           type="submit"
          />
        </form>      
      </main>
    </div>
  );
}

export default App


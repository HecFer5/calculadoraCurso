import './App.css';
import { useState } from 'react';
import Boton from './componentes/boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import BotonDel from './componentes/botonDel';
import { evaluate } from 'mathjs';
import LogoFC from './componentes/logo';

function App() {
  const [input, setInput] = useState('');
  const valores = ['+', '*', '/', '']
  let largo = input.length
  let comenzar = false




  const aregarInput = val => {
    
   
    if (valores.includes(val) && input.indexOf(val) > -1 ) {
    } else { 
      if (comenzar===false){
      setInput(setInput(''))
      setInput(input + val)
    }else{
       setInput(input + val)
    }
     
    }
    comenzar = true
  }

  const borrarUltimo = () => {
    setInput(input.slice(0, -1))
  }

  const calcularResultado = () => {
    setInput(evaluate(input));
    comenzar = false

  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <LogoFC />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={aregarInput}>7</Boton>
          <Boton manejarClic={aregarInput}>8 </Boton>
          <Boton manejarClic={aregarInput}>9</Boton>
          <Boton manejarClic={aregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={aregarInput}>4</Boton>
          <Boton manejarClic={aregarInput}>5</Boton>
          <Boton manejarClic={aregarInput}>6</Boton>
          <Boton manejarClic={aregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={aregarInput}>1</Boton>
          <Boton manejarClic={aregarInput}>2</Boton>
          <Boton manejarClic={aregarInput}>3</Boton>
          <Boton manejarClic={aregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={aregarInput}>0</Boton>
          <Boton manejarClic={aregarInput}>.</Boton>
          <Boton manejarClic={aregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
          <BotonDel manejarClear={borrarUltimo}>Del</BotonDel>

        </div>

      </div>
    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import Logo from './imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';

function App() {
  const [input, setInput] = useState('');

  const aregarInput = val =>{
    setInput(input + val)
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img src={Logo}
          className='logo'
          alt='logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
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
        <Boton manejarClic={aregarInput}>=</Boton>
        <Boton manejarClic={aregarInput}>0</Boton>
        <Boton manejarClic={aregarInput}>.</Boton>
        <Boton manejarClic={aregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear>Clear</BotonClear>
        </div>

      </div>
    </div>
  );
}

export default App;

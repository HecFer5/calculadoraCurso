
import './App.css';
import Logo from './imagenes/FreeCodeCamp_logo.png'

function App() {
  return (
    <div className='App'>
   <div className='logo-contenedor'>
    <img src={Logo} 
    className='logo'
    alt='logo de freeCodeCamp' />
    </div>
    <div className='contenedor-calculadora'>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>
      <div className='fila'></div>

    </div>
    </div>
  );
}

export default App;

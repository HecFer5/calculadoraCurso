import React from "react";
import '../hojas-de-estilo/BotonClear.css'

const BotonClear = (props) =>(
    <div className='boton-cleaar' onClick={props.manejarClear}>
        {props.children}
    </div>

)

export default BotonClear;
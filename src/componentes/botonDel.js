import React from "react";
import '../hojas-de-estilo/botonDel.css'

const BotonDel = (props) =>(
    <div className='boton-delete' onClick={props.manejarClear}>
        {props.children}
    </div>

)

export default BotonDel;
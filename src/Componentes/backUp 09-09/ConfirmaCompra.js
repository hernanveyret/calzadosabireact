import React from 'react';
import Confirm from '../iconos/check.gif';
import '../estilos/ConfirmaCompra.css';



const ConfirmaCompra = ({check}) => {
  return (
    <div className="contenedorConfirm">
        
        <img src={Confirm} alt="Agrega al carrito" />        
        
    </div>
  )   
}

export default ConfirmaCompra;
import React from 'react';
import imgBolsita from '../iconos/bolsa.png';
import '../estilos/bolsita.css'

function IcoBolsita({contador,verCompra}){

    
    return (
        <div className="iconoContenedor">
            <div className="iconoBolsita">
                <img src={imgBolsita} alt="Imagen bolsita" onClick={verCompra}/>
            </div>
            <p className="iconoContador">{contador}</p>
        </div>
    )
}

export default IcoBolsita;
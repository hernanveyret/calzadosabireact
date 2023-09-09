import React from 'react';
import lupa from '../iconos/lupa.png';
import '../estilos/buscador.css';

export default function Buscador({refe,refInp,evento,holder}){
   
    return (
        <div className='barra-buscador' ref={refe}>
            <input type="text" name="buscador" placeholder={holder} ref={refInp} autoFocus /><button onClick={evento}><img src={lupa} alt="Lupa" /></button>
        </div>
    )
}

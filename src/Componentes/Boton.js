import React from 'react';

export default function Boton({classN,evento,texto,dataSet}){  
    return (
        <button data-id={dataSet} className={classN} onClick={evento}>{texto}</button>
    )
}
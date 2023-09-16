import React from 'react';
import ImgEnvios from '../imagenes/banner/enviospngB.png';
import ImgPagos from '../imagenes/banner/pagosB.png';
import '../estilos/Varios.css';

export default function Varios(){
    return (
        <>
           <img src={ImgEnvios} alt="Logo envios" className="imgVarios"/>
           <img src={ImgPagos} alt="Logo PAgos" className="imgVarios"/>
        </>
    )
}
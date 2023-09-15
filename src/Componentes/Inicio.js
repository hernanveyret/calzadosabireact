import React from 'react';
import '../estilos/cards.css';
import '../estilos/main.css';
import '../estilos/inicio.css';
import '../estilos/botones.css';
import Carrusel from './Carrusel';

export default function Inicio(props) {

  return (
    <div className="main-inicio">
      <h1>INICIO</h1>
      <div className="contenedor-carrusel">
       <Carrusel />
      </div>
      <section className="inicio-varios ventanas">
        <h2>ANUNCIOS VARIOS</h2>
      </section>
      <section className="inicio-ofertas ventanas">
        <h2>OFERTAS</h2>
      </section>
      
    </div>
  )
}
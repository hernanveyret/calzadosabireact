import React, { useRef } from 'react';
import '../estilos/cards.css';
import '../estilos/main.css';
import '../estilos/inicio.css';
import '../estilos/botones.css';
import ImagenUno from '../imagenes/banner/imagenUno.webp';
import ImagenDos from '../imagenes/banner/imagenDos.png';
import ImagenTres from '../imagenes/banner/imagenTres.webp';

export default function Inicio(props) {
    let refImg = useRef();

    let moverIzq = () => {
      console.log('izquierda')
      console.log(refImg.current)
      refImg.current.style.transition='.5s';
      refImg.current.style.left= -100 + '%'
    }
    let moverDer = () => {
      console.log('derecha')
    }
  return (
    <div className="main-inicio">
      <h1>INICIO</h1>
        <div className="contenedor-carrusel">
          <div className="contenedor-imagenes" ref={refImg}>
            <div className="img-carrusel"><img src={ImagenUno} alt="Imagen uno" /></div>
            <div className="img-carrusel"><img src={ImagenDos} alt="Imagen dos" /></div>
            <div className="img-carrusel"><img src={ImagenTres} alt="Imagen tre" /></div>
          </div>
          <nav className="nav-inicio">
            <button onClick={moverIzq} className="btn-carrusel">{'<'}</button><button onClick={moverDer} className="btn-carrusel">{'>'}</button>
          </nav>
        </div>
      
    </div>
  )
}
import React, { useState, useRef, useEffect} from 'react';
import ImagenUno from '../imagenes/banner/imagenUno.webp';
import ImagenDos from '../imagenes/banner/imagenDos.png';
import ImagenTres from '../imagenes/banner/imagenTres.webp';
import '../estilos/inicio.css';
import '../estilos/botones.css';
import '../estilos/carrusel.css';
export default function Carrusel() {

    let refImg = useRef();

    const [contador, setContador] = useState(0)

    let moverIzq = () => {
      contador > -200 ? setContador((prevContador) => prevContador - 100) : setContador(0)
    }
    let moverDer = () => {
     contador === 0 ? setContador(0) :  setContador((prevContador) => prevContador + 100)
    }
    useEffect(() => {
      refImg.current.style.transition = '.5s';
      refImg.current.style.left = contador + '%';
    },[contador])

    return (
      <section className='section-carrusel'>
        <div className="contenedor-imagenes" ref={refImg}>
          <div className="img-carrusel"><img src={ImagenUno} alt="Imagen uno" /></div>
          <div className="img-carrusel"><img src={ImagenDos} alt="Imagen dos" /></div>
          <div className="img-carrusel"><img src={ImagenTres} alt="Imagen tre" /></div>
        </div>
        <nav className="nav-carrusel">
          <button onClick={moverIzq} className="btn-carrusel">{'<'}</button><button onClick={moverDer} className="btn-carrusel">{'>'}</button>
        </nav>
      </section>
    )
}
import React, {useState, useEffect} from 'react';
import '../estilos/cards.css';
import '../estilos/main.css';
import '../estilos/inicio.css';
import '../estilos/botones.css';
import Carrusel from './Carrusel';
import Ofertas from './Ofertas';
import Varios from './Varios';

export default function Inicio({dataBase}) {
  const [productos, setProductos] = useState(dataBase)

  useEffect(() => {
    setProductos(dataBase)
  },[dataBase])
  return (
    <div className="main-inicio">
      <h1>INICIO</h1>
      <div className="contenedor-carrusel">
       <Carrusel />
      </div>
      <section className="inicio-varios ventanas">
        <Varios />
      </section>
      <section className="inicio-ofertas ventanas">
        <Ofertas db={productos} />
      </section>
      <section className="ventanas">
        <h1>MARCAS</h1>
      </section>
      
    </div>
  )
}
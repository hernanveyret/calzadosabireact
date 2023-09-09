import React, {useState, useEffect} from "react";
import db from '../Api/db.json';
import '../estilos/main.css';
import '../estilos/cards.css';
import '../estilos/botones.css';
import Boton from './Boton';

export default function SelectBuscador({valor}){
  const [producto, setProducto] = useState([])
  
  useEffect(() => {
   let valorU = valor[0].toUpperCase() + valor.slice(1)
   let opcion = db.filter(e => e.articulo === valorU || e.marca === valorU || e.genero === valorU || e.estilo === valorU || e.categoria === valorU);
        setProducto(opcion)
    
  },[valor])

  return (
    <div className='main-productos'>
        <h1>BUSCADOR</h1>
          <div className="main-main-productos">
          {
              producto.map((e,i) =>  (
                
                <div className="tresD" key={e.idUno}>
                  <div className="cardsArticulos" data-idd={e.idUno}>                           
                    <p className="art">{e.articulo}</p>
                    <p>{e.marca}</p>                            
                    <img src={e.imagen} alt="imagen" />
                    <p>{e.nInicio} al {e.nFinal}</p>
                    <p>$ {e.precio}</p>
                    <p className="color">{e.color}</p>
                      <Boton 
                      dataSet={e.idUno}
                      classN='btn-vermas'
                      
                      texto='VER MAS'
                      />
                    
                  </div>  
                </div>       
              )
                  
                            
                )
            }
        </div>
    </div>
  )
}
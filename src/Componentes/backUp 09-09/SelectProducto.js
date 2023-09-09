import React from 'react';
import Boton from './Boton';
import '../estilos/cards.css';
import '../estilos/main.css';
import '../estilos/botones.css';
import db from '../Api/db.json';



export default function SelectProducto({tipo,select}) {
    let productoSelect = db.filter(e => e[tipo] === select)
  
    
    return (
        <div className='main-productos'>
        <h1>{select}</h1>
        <div className="main-main-productos">
            {
              productoSelect.map((e,i) =>  (
                
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



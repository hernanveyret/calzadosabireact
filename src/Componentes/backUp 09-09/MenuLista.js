import React from 'react';
import productos from '../Api/db.json';
import '../estilos/botones.css';


export default function MenuLista({tipo}){
    const condicion = []
  for ( let i = 0; i < productos.length; i++) {
     if(condicion.includes(productos[i][tipo])){
         continue;
     }else {
         condicion.push(productos[i][tipo])
     }
  }
  condicion.sort()
  let titulo = tipo.toUpperCase()
   return (
    <div className="menuLista">
      <h3>{titulo + 'S'}</h3>
      {
        condicion.map((e, i) => (
          <ul key={i}>
              <li data-id={tipo}><button  className="btn-menu-lista">{e}</button></li>
          </ul>
        ))
      }
    </div>
   )
}
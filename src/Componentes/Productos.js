import React, {Component} from 'react';
import Boton from './Boton';

import '../estilos/cards.css';
import '../estilos/main.css';
import '../estilos/botones.css';

let comprar = (e) => {
  /*
  const dataset = e.target.dataset
  const dataid = dataset.id
  const obj = e.target.parentElement;
  const articulo = obj.querySelector('.art').textContent
  const color = obj.querySelector('.color').textContent
  const num = obj.querySelector('select').value;
  console.log(dataid)
  const producto = {
      id: dataid,
      articulo: articulo,
      color: color,
      numero: num   
  } */ 
  console.log('Comprar')
}

export default class Productos extends Component {
  constructor(props){
      super(props);
     this.state = {
      articulos: props.dataBase
     }
  }

   render () {
    return (
      
      <div className='main-productos'>
          <h1>TODOS LOS PRODUCTOS</h1>
          <div className="main-main-productos">  
        {
          this.state.articulos.map((e ,i ) => (  
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
                evento={comprar}
                texto='VER MAS'
              />
              
            </div> 
          </div>                  
          ))
        }
        </div>
      </div>
    )
  }
}
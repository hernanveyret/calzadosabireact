import React,{useState, useEffect} from 'react';
import Boton from './Boton';
import '../estilos/main.css';
import '../estilos/bolsita.css';
import '../estilos/botones.css';
import '../estilos/descripcion.css';
import BolsaVacia from '../iconos/bolsa-vacia.png';

export default function Bolsita(){

 const [bolsa,setBolsa] = useState(localStorage.getItem('articulosBolsita')) // toma el contenido del localStorage
 const [bolsaStorage,setBolsaStorage] = useState(bolsa ? JSON.parse(bolsa) : []) // si hay producto lo agrega sino, agrega un array vacio
 let sumaPares;
 const juntaPares= bolsaStorage.map(e => e.cantidad)
 if (juntaPares.length > 0 ) { 
  sumaPares = juntaPares.reduce((a,b) => a+b,0);
 } else {
  sumaPares = 0;
 }
 useEffect(() => {

 },[sumaPares])

 const juntaPlata=[]
 
 let plata=0
  for (let  i=0; i < bolsaStorage.length; i++){
    juntaPlata.push(parseFloat(bolsaStorage[i].total))
  }
  for (let  i=0; i < juntaPlata.length; i++){
    plata += juntaPlata[i]
  }
  
    // Elimina un producto de la bolsa.
    let borrar = (e) => {
      const dataset = e.target.dataset;
      const id = dataset.id;
      bolsaStorage.splice(id,1);
      localStorage.setItem("articulosBolsita",JSON.stringify(bolsaStorage)); // actualizo la lista persistente de compras
      let recuperar = localStorage.getItem("articulosBolsita")
      setBolsa(recuperar)
    }
    // Suma cantidad de preoductos y el precio.
    let sumar = (e) => {
      const dataset = e.target.dataset;
      const id = dataset.id;
      let cant = parseFloat(bolsaStorage[id].cantidad)
      let importeUni = parseFloat(bolsaStorage[id].precio)
      let totalUni = parseFloat(bolsaStorage[id].total)      
      cant = cant + 1
      bolsaStorage[id].cantidad = cant;
      bolsaStorage[id].total = importeUni + totalUni
    
      actualizarStorage(bolsaStorage)
    }
    // Resta la cantidad de un producto y el precio.
    let restar = (e) => {
      const dataset = e.target.dataset;
      const id = dataset.id;
      let cant = parseFloat(bolsaStorage[id].cantidad)
      let importeUni = parseFloat(bolsaStorage[id].precio)
      let totalUni = parseFloat(bolsaStorage[id].total) 
      cant = cant - 1
      bolsaStorage[id].cantidad = cant;
      bolsaStorage[id].total = totalUni - importeUni;
      if (cant === 0) {
        bolsaStorage.splice(id,1);
      }
      actualizarStorage(bolsaStorage)
    }
    // Vacia la bolsa
    const vaciar = () => {
      let cant = bolsaStorage.length;
      bolsaStorage.splice(0,cant)
      actualizarStorage(bolsaStorage)
     }
     // Actualizo la lista de compras persistente
      let actualizarStorage = (bolsaStorage) => {
      localStorage.setItem("articulosBolsita",JSON.stringify(bolsaStorage)) 
      let recuperar = localStorage.getItem("articulosBolsita");
      setBolsa(recuperar)

    } 

    
    const pagar = () => { }

    useEffect(() => {
      
    },[bolsaStorage,bolsa])
  
    return (
        <div className='main-productos'>
          <h1>SUS PRODUCTOS</h1>
          <div className="main-bolsita">             
            <table  cellSpacing={0} cellPadding={7} className='tabla'>
              <thead>
              <tr>
                <th className='celda'>Cant.</th>
                <th className='celdaDos'>Articulo</th>
                <th className='celdaDos'>Marca</th>
                <th className='celdaDos'>Color</th>
                <th className='celda'>Num.</th>
                <th className='celdaDos'>Pre. Uni.</th> 
                <th className='celdaDos'>Total</th>
                <th></th>                      
              </tr>
              </thead>
                
            { bolsaStorage.length > 0 ?
              bolsaStorage.map((e,i) => (
                <tbody key={i}>
                <tr>
                  <td>{e.cantidad}</td>
                  <td>{e.articulo}</td>
                  <td>{e.marca}</td>
                  <td>{e.color}</td>
                  <td>{e.numero}</td>
                  <td>${e.precio}</td>
                  <td>${e.total}</td>
                  <td><button data-id={i} onClick={sumar}>+</button><button data-id={i} onClick={restar}>-</button><button className="tachito" data-id={i} onClick={borrar}>.</button></td>
                </tr>
                </tbody>
            )) : ''
            }
              
            </table>
          
            { bolsaStorage.length > 0 ?
              bolsaStorage.map((e,i) => (
                <div className="tablaRes" key={i}>
                  <div className="asideIz">
                    <p>Articulo</p>
                    <p>{e.articulo}</p>
                    <p>Marca</p>
                    <p>{e.marca}</p>
                  </div>
                  <div className='asideDe'>
                    <p>Cant.: {e.cantidad}:</p>
                    <p>Color: {e.color}</p>
                    <p>P.Uni: {e.precio}</p>
                    <p>Total: {e.total}</p>
                  </div>
                    <div className="navBolsa"><button data-id={i} onClick={sumar}>+</button><button data-id={i} onClick={restar}>-</button><button className="tachito" data-id={i} onClick={borrar}>.</button></div>
              </div>
              )) : <img src={BolsaVacia} alt="bolsita" className="bolsitaBacia"/>
            }
              
          </div>
          <section className='totales'>
                <p>Cant. Total: {sumaPares}</p> <p>Importe Total: ${plata}</p>
               
              </section>
                <section className="nav-bolsita">
                  <Boton 
                  dataSet='id'
                  classN='btn-btn-bolsita'
                  evento={vaciar}
                  texto='VACIAR'
                  />
                  <Boton 
                   dataSet='id'
                   classN='btn-btn-bolsita'
                   evento={pagar}
                   texto='PAGAR'
                   />
                   
                </section>
             
            
                    
        </div>
    )
}

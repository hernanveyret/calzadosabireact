import React, {useState,useEffect} from 'react';
import Boton from './Boton';
import '../estilos/main.css';

export default function Ofertas({db}) {
    const [ofertas, setOfertas] = useState(db)
    const off = ofertas.filter(e => e.oferta)
    const estiloOff = {
        display:'felx',
        backgroundColor:'red',
        color:'white',
        width: '50%',
        margin:'0 auto'
    }
    console.log(off)
    useEffect(() => {
        setOfertas(db)
    },[db])
    return (
        <div>
            <h1>OFERTAS</h1>
            <div className="main-main-productos">  
        {
         off.map((e ) => (
            
            <div className="tresD" key={e.idUno}>                
            <div className="cardsArticulos" data-idd={e.idUno}>              
              <p className="art">{e.articulo}</p>
              <p>{e.marca}</p>                            
              <img src={e.imagen} alt="imagen" />
              <p>{e.nInicio} al {e.nFinal}</p>
              <p style={estiloOff}>OFF {e.descuento}%</p>
              <p><del>${e.precio}</del></p>
              <p>$ {e.precio - (e.precio * e.descuento / 100)}</p>
              <p className="color">{e.color}</p>
              <Boton 
                dataSet={e.idUno}
                classN='btn-vermas'
                
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
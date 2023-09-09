import React from 'react';
import '../estilos/main.css'
import SelectProducto from './SelectProducto';
import Productos from "./Productos";
import Inicio from './Inicio';
import Informacion from './Informacion';
import Contactenos from './Contactenos';
import VerMas from './VerMas';
import Bolsita from './Bolsita';
import SelectBuscador from './SelectBuscador';

export default function Main({pro,ini,info,con,proS,tipo,select,ver,ide,compra, buscador,miBuscador}){
       
    return (
        <div className='main-productos'>
            
            <div className="main-main-productos">
              { compra ? <Bolsita /> : ''}
              { ver ? <VerMas ide={ide}/> : ''}            
              { proS ? <SelectProducto tipo={tipo} select={select}/> : '' }
              { pro ? <Productos /> : '' }
              { ini ? <Inicio /> : '' }
              { info ? <Informacion /> : '' }
              { con ? <Contactenos /> : '' }
              { buscador ? <SelectBuscador valor={miBuscador}/> : '' }                      
            </div>
        </div>
    )
}
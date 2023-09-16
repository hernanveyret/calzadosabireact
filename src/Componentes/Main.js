import React,{useState, useEffect} from 'react';
import '../estilos/main.css'
import SelectProducto from './SelectProducto';
import Productos from "./Productos";
import Inicio from './Inicio';
import Informacion from './Informacion';
import Contactenos from './Contactenos';
import VerMas from './VerMas';
import Bolsita from './Bolsita';
import SelectBuscador from './SelectBuscador';
import db from '../Api/db.json';


export default function Main({pro,ini,info,con,proS,tipo,select,ver,ide,compra, buscador,miBuscador}){
    const [ inicialDb, setInicialDb] = useState(db)

    useEffect(() => {
        setInicialDb(db)
    },[inicialDb])

    return (
        <div className='main-productos'>
            
            <div className="main-main-productos">
              { compra ? <Bolsita /> : ''}
              { ver ? <VerMas ide={ide}/> : ''}            
              { proS ? <SelectProducto dataBase={inicialDb} tipo={tipo} select={select} /> : '' }
              { pro ? <Productos dataBase={inicialDb}/> : '' }
              { ini ? <Inicio dataBase={inicialDb} /> : '' }
              { info ? <Informacion /> : '' }
              { con ? <Contactenos /> : '' }
              { buscador ? <SelectBuscador dataBase={inicialDb} valor={miBuscador}/> : '' }                      
            </div>
        </div>
    )
}
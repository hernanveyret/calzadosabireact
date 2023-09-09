import React,{useState,useEffect} from 'react';
import Boton from './Boton';
import Numeracion from './Numeracion';
import ConfirmaCompra from './ConfirmaCompra';
import '../estilos/main.css';
import '../estilos/botones.css';
import '../estilos/descripcion.css';
import db from '../Api/db.json'
 
export default function VerMas({ide}){
  
  const bolsa = localStorage.getItem('articulosBolsita') // toma el valor de localStorage
  const bolsaSotage = bolsa ? JSON.parse(bolsa) : []; // si tiene algo lo agrega a la variable, sino le agrega un array vacio
 
  const [productos,setProductos] = useState(bolsaSotage)
  const [producto,setProducto] = useState({})
  const [imagen,setImagen] = useState(undefined)
  const [color, setColor] = useState(undefined)
  const [condicion,setCondicion] = useState(true)
  const [checkCompra, setCheckCompra] = useState(false)
  let imgSelect;
  let colorSelect;
  
  // Agrega producto a la bolsa.

  let agregar = (e) => {    
    const contenedor = document.querySelector('.main-main-productos')
    const articulo = contenedor.querySelector('.art').textContent;
    const marca = contenedor.querySelector('.marca').textContent;
    const color = contenedor.querySelector('.color').value;
    const contenedorNumeros = contenedor.querySelector('.numeros');
    const numero = contenedorNumeros.querySelector('#selectDinamico').value;
    const precio = contenedor.querySelector('.precio').textContent;
  
    const nuevoProducto= {
      articulo:articulo,
      marca:marca,
      color:color,
      numero:numero,
      precio:precio,
      total:precio,
      cantidad: 1
    }
    
    setProducto(nuevoProducto)
    setProductos((productoAnterior) => [...productoAnterior, { ...nuevoProducto }]);
    setCheckCompra(true)
  }
  
  useEffect(() => {      
    localStorage.setItem("articulosBolsita",JSON.stringify(productos)); // el articulo comprado queda persistente
    let recuperar = JSON.parse(localStorage.getItem("articulosBolsita"))    
    const juntaPares = recuperar.map(e => e.cantidad);
    const totalPares = juntaPares.reduce((a,b) => a+b, 0);
    document.getElementById('cantidad-productos-bolsita').textContent = totalPares;
    
   },[producto,productos ])
 
  // verifica el color y si tiene mas colores lo agrega a otro array para luego crear un select
  let otroColor = []
  const listaDeColores = []
  const productoSelect = db.filter(e => e.idUno===ide) 
        listaDeColores.push(productoSelect[0].color)

       if(productoSelect[0].otrosColores){
        otroColor = productoSelect.map(e => e.otrosColores)
        
       }else {      
        otroColor.push([]) // como no hay otro color agrega un array vacio para que funcione el map de otros colores
       }
  
    for ( let c = 0; c < otroColor[0].length; c++){
        listaDeColores.push(otroColor[0][c].color)
    }
      // condicion comienza como true asi le asigna a imagen la imagen principal, condicion cambia a false asi no la vuelve a reiniciar y no genera un loop
    if(condicion === true) {
      setImagen(productoSelect[0].imagen)
      setColor(productoSelect[0].color)
      setCondicion(false)
    }
    
    let cambiarImagen = (e) => {
    imgSelect = e.target.getAttribute('data-img');
    colorSelect = e.target.getAttribute('data-color')
    setColor(colorSelect)
    setImagen(imgSelect)
   }
   
   useEffect(() => {
    
  }, [productoSelect,imgSelect,colorSelect]);

    return (
        <div className='main-productos'>
          <h1>DESCRIPCION DEL PRODUCTO</h1>
          <div className="main-main-productos">

            
                {/* imagen principal del producto l */}

            <section className="imgProducto vidrio">
              <img src={imagen} alt="Foto del calzado" />
              <p>{color}</p>
            </section>
                  {/* descripcion del producto */}
            <section className="descripcion vidrio">
                <h2>Artículo: <span className="art">{productoSelect[0].articulo}</span></h2>
                <p>Marca: <span className="marca">{productoSelect[0].marca}</span></p>
                <p>Numeracion: {productoSelect[0].nInicio} al {productoSelect[0].nFinal}</p>
                <p>Material: <span>{productoSelect[0].material}</span></p>
                <p>Precio: $ <span className="precio">{productoSelect[0].precio}</span></p>
            </section>

            <section className="otrosColores vidrio">
              {
                otroColor.map((grupoColores,i) => (
                  <div key={i} className="contenedorC">
                    {
                      grupoColores.map((e,i) => (
                        <button className="imgOtrosColores" key={i} onClick={cambiarImagen} >
                          <img src={e.imagen} alt={e.id} className="imagenColor" data-img={e.imagen} data-color={e.color}/>
                        </button>
                      ))
                    }
                    { grupoColores.length === 0 ? '' : 
                    <button className="imgOtrosColores"  onClick={cambiarImagen} >
                    <img src={productoSelect[0].imagen} alt={productoSelect[0].imagen} className="imagenColor" data-img={productoSelect[0].imagen} data-color={productoSelect[0].color}/>
                    </button> 
                    }
                  </div>
                )) 
              }
            </section>

          <section className="menues vidrio">
            {/* lista de colores */}
            <section className="colores">
              <h2>Selecciones un color</h2>
              <select className="color">
                {  
                  listaDeColores.map((e,i) => (                  
                  <option key={i} value={e}>{e}</option>                  
                  ))              
                }
              </select>
            </section>
              {/* lista de numeracion */}
            <section className="numeros">
              <h2>Selecciones un numero</h2>              
              <Numeracion inicial={productoSelect[0].nInicio} final={productoSelect[0].nFinal}/>              
            </section>
          </section>
                  {/* botones */}
          <section className="nav-agregarProducto vidrio">
          { checkCompra ? <ConfirmaCompra /> : ''}
            <Boton 
            dataSet='id'
            classN='btn-agregarCarrito'
            evento={agregar}
            texto='AGREGAR'
            />
          </section>             
          </div> 
         
        </div>  
    )
}
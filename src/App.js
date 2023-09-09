//------------------Componentes---------------------
import React, {useState,useEffect, useRef} from 'react';
import Boton from './Componentes/Boton';
import MenuLista from './Componentes/MenuLista';
import Main from './Componentes/Main';
import Buscador from './Componentes/Buscador';
//------------------estilos-------------------------
import './App.css';
import './estilos/botones.css';

//------------------Imagenes------------------------
import iconoMenu from './iconos/iconoMenu.png';
import imgProductos from './iconos/zapatilla.png'
import imgInformacion from './iconos/info.png'
import imgContacto from './iconos/sobre.png'
import imgHome from './iconos/home.png'
import logo from '../src/iconos/logo.png'
import bolsa from '../src/iconos/bolsa.png'
import lupa from '../src/iconos/lupa.png'

function App() {
  const [holder,setHolder] = useState('Buscar')
  const [selectB, setSelectB] = useState(false)
  const [miSeleccion,setMiseleccion] = useState(null)
  const [i,setI] = useState(true)
  const [p,setP] = useState(null)
  const [inf,setInf] = useState(null)
  const [c,setC] = useState(null)
  const [ps,setPs] = useState(null)
  const [mt,setMt] = useState(null)
  const [mis, setMis] = useState(null)
  const [verM,setVerm] = useState(null)
  const [idDes,setidDes] = useState(null)
  const [tuCompra,setTuCompra] = useState(null)
  const [paresTotal, setParesTotal] = useState(0) 
  
  const [bolsita,setBolsita] = useState(localStorage.getItem('articulosBolsita')) // toma el contenido del localStorage
  const [bolsaStorage,setBolsaStorage] = useState(bolsita ? JSON.parse(bolsita) : []) // si hay producto lo agrega sino, agrega un array vacio
  const juntaPares = bolsaStorage.map(e => e.cantidad);
  const totalPares = juntaPares.reduce((a,b) => a+b, 0);

  useEffect(() => {
    setParesTotal(totalPares)
  },[totalPares])
   
  let refBuscador = useRef();
  let refInput = useRef();

  let inicio = () => {
    setSelectB(false)
    setI(true)
    setP(false)
    setInf(false)
    setC(false)
    setPs(false)
    setVerm(false)
    setTuCompra(false)
  }

  let productos = () => {
    setSelectB(false)
    setP(true)
    setI(false)
    setInf(false)
    setC(false)
    setPs(false)
    setVerm(false)
    setTuCompra(false)
  }
  let informacion = () => {
    setSelectB(false)
    setP(false)
    setI(false)
    setInf(true)
    setC(false)
    setPs(false)
    setVerm(false)
    setTuCompra(false)
  }
  let contactenos = () => {
    setSelectB(false)
    setP(false)
    setI(false)
    setInf(false)
    setC(true)
    setPs(false)
    setVerm(false)
    setTuCompra(false)
  }

  let verDescripcion = (idd) => {
    setSelectB(false)
    setidDes(idd)
    setVerm(true)
    setP(false)
    setI(false)
    setInf(false)
    setC(false)
    setPs(false)
    setTuCompra(false)
  }
  let verCompra = () => {
    setSelectB(false)
    setSelectB(false)
    setTuCompra(true)
    setP(false)
    setI(false)
    setInf(false)
    setC(false)
    setPs(false)
    setVerm(false)
  }

  let buscarBarra = () => {
    refBuscador.current.style.display='flex'    
  }

  let barra = () => {
    refBuscador.current.style.display='none'
    setMiseleccion(refInput.current.value);
    setSelectB(true)
    setTuCompra(false)
    setP(false)
    setI(false)
    setInf(false)
    setC(false)
    setPs(false)
    setVerm(false)
  }
useEffect(() => {

  const selectPorOpcon = (e) => {
    
    const objetoSelect = e.target.parentElement;
    const btnSelect = e.target.classList.contains('btn-menu-lista');
    const btnVer = e.target.classList.contains('btn-vermas');

    if(btnSelect) {      
        let dataSet = objetoSelect.dataset;
        let marcaTipo = dataSet.id;
        let miSeleccion = objetoSelect.querySelector('.btn-menu-lista').textContent;        
        setMt(marcaTipo)
        setMis(miSeleccion)
        setPs(true)
        setP(false)
        setI(false)
        setInf(false)
        setC(false)
        setVerm(false)
        setTuCompra(false)
        setSelectB(false)

    }
    if(btnVer) {
      let dataSetVerMas = e.target.dataset
      let idd = dataSetVerMas.id
      verDescripcion(idd)      
    }
  }

  window.addEventListener('click', selectPorOpcon) // llama a la funcion 
  return () => window.removeEventListener('click', selectPorOpcon) // elimina la funcion para que no se multiplique
},[])

  function menu(){
    let check = document.querySelector('.checkMenu');
    let menuVertical = document.getElementById('verticalMenu');
    if (check.checked) {
      menuVertical.style.display='none'
    }else {
      menuVertical.style.display='block'
    }    
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="izq">
          <label>
            <input type="checkbox" name="menu" id="menu" className="checkMenu"/>
            <img src={iconoMenu} alt="Imagen del icono del menu" className="iconoMenu" onClick={menu} />
          </label>

            <nav className="navegadorVertical" id="verticalMenu">
              <Boton 
                classN='btn-menu-vertical'
                evento={inicio}
                texto={<img src={imgHome} alt="imagen" className="imgMenu" />}
              />
              <Boton 
                classN='btn-menu-vertical'
                evento={productos}
                texto={<img src={imgProductos} alt="imagen" className="imgMenu" />}
              />
              <Boton 
                classN='btn-menu-vertical'
                evento={informacion}
                texto={<img src={imgInformacion} alt="imagen" className="imgMenu" />}
              />
              <Boton 
                classN='btn-menu-vertical'
                evento={contactenos}
                texto={<img src={imgContacto} alt="imagen" className="imgMenu" />}
              />
            </nav>
        </div>
        <div className="centro">
          <img src={logo} alt="Logo" className="logo" onClick={inicio} id="inicio"/>
          <p className="titulo">Calzados Abi</p>
        </div>
        {/* Bolsita de compras */}
        <div className="der">
          <div className="der-der">
           <Buscador refe={refBuscador} refInp={refInput}evento={barra} holder={holder} />
           <button className="btn-lupa" onClick={buscarBarra}><img src={lupa} alt="Lupa buscador" /></button>
           <button className="btn-bolsita" onClick={verCompra}><img src={bolsa} alt="Bolsita" className="iconoBolsaHeader"/></button>
            <p id="cantidad-productos-bolsita">{paresTotal}</p>
          </div>
        </div>        
      </header>

      <nav className="navegadorPrincipal">
        <Boton 
          classN='btn-menu'
          evento={inicio}
          texto='INICIO'
        />
        <Boton 
          classN='btn-menu'
          evento={productos}
          texto='PRODUCTOS'
        />
        <Boton 
          classN='btn-menu'
          evento={informacion}
          texto='INFORMACION'
        />
        <Boton 
          classN='btn-menu'
          evento={contactenos}
          texto='CONTACTENOS'
        />
      </nav>

      <main>
        <aside className="aside-izq">
          <MenuLista tipo='marca'/>
          <MenuLista tipo='estilo'/>
          <MenuLista tipo='categoria'/>
          <MenuLista tipo='material'/>
        </aside>

        <section className="section-main">
            {selectB ? <Main buscador={selectB} miBuscador={miSeleccion}/> : ''}
            {tuCompra ? <Main compra={tuCompra} /> : ''}      
            {verM ? <Main ver={verM} ide={idDes}/> : ''}
            {ps ? <Main proS={ps} tipo={mt} select={mis}/> : '' }
            {p ? <Main pro={p} /> : ''}
            {i ? <Main ini={i} /> : '' } 
            {inf ? <Main info={inf} /> : ''}
            {c ? <Main con={c} /> : '' }
        </section>

      </main>

      <footer>
       <ul>
        <li><Boton classN='btn-footer' evento={inicio} texto='Inicio' /></li>
        <li><Boton classN='btn-footer' evento={productos} texto='Productos' /></li>
        <li><Boton classN='btn-footer' evento={informacion} texto='Informacion' /></li>
        <li><Boton classN='btn-footer' evento={contactenos} texto='Contactenos' /></li>
       </ul>

       <ul>
        <li><p>America 617, San Nicolas de los Arroyos, Bs.As.</p></li>
        <li><p>(011) 3402549</p></li>
        <li><p>hernanveyret@hotmail.com</p></li>
        <li><p>Facebook/Instagra</p></li>
       </ul>
      
      </footer>

      <a href="#inicio" className="iconoFlecha">inicio</a>
      <a href="#inicio" className="iconoWhatsapp">whatsapp</a>
    </div>
  );
}
export default App;
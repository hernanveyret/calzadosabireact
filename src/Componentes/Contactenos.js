import React from 'react';
import '../estilos/cards.css';
import '../estilos/main.css';
import '../estilos/contactenos.css';
import sobreFondo from '../iconos/sobreFondo.png'

export default function Contactenos(props){
    
    return (
        <div className="main-contactenos">
            <h1>CONTACTENOS</h1>
            <main className='main-contactenos'>
                <img src={sobreFondo} alt="Imagen de un sobre" />
                <div className="formulario">
                    <form action="formulario.php">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" name="nombre" id="nombre" className="inputContactenos"/>
                        <label htmlFor="Apellido">Apellido:</label>
                        <input type="text" name="apellido" id="apellido" className="inputContactenos"/>
                        <label htmlFor="telefono">Telefono:</label>
                        <input type="text" name="telefono" id="telefono" className="inputContactenos"/>
                        <label htmlFor="mail">Mail:</label>
                        <input type="mail" name="main" id="mail" className="inputContactenos"/> 
                        <label htmlFor='msj'>Mensaje:</label>
                        <textarea name="mensaje" id="msj"></textarea>
                        <input type="submit" value="ENVIAR"  className="submitContactenos"/>
                    </form>
                </div>
            </main>
        </div>
    )
}
import React, { Fragment,useState,useEffect } from 'react';

import './App.css';

import Header from "./components/header/Header";
import NavBar from "./components/navBar/navBar";
import Contenedor from "./components/pages/content"
import Footer from "./components/footer/Footer";
import ContenedorIndex from "./components/pages/content";

function App() {

  const [stock, setStock] = useState(5);
  const [mensajeStock, setMensajeStock] = useState(false);
  const [contador, setContador] = useState(0);
  const [actualizacion, setActualizacion] = useState(Date());  

  const agregarProducto = (value) => {
        if(contador >= stock){
          setMensajeStock('stock no disponible');
        }else{
          setContador(contador + value);
          setMensajeStock('');
        }
  };

  const quitarProducto = (value) => {
        if(contador < 1){
          setMensajeStock('Solo puedes quitar productos que existan, jamas negativos');
        }else{
          setContador(contador + value);
          setMensajeStock('');
        }
  }

  useEffect(() => {
      setActualizacion(Date());
  }, [contador]);


  return (
    <Fragment>
      <div class="content">
          <Header contador={contador} />
          <NavBar />
          <Contenedor 
            stock={stock}
            mensajeStock={mensajeStock}
            agregarProducto={agregarProducto}
            quitarProducto={quitarProducto}
          />
          <Footer />
      </div>
    </Fragment>
  );
}

export default App;

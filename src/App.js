import React, { Fragment,useState,useEffect } from 'react';

import './App.css';

import Header from "./components/header/Header";
import NavBar from "./components/navBar/navBar";
// import Contenedor from "./components/pages/content";
import ItemListContainer from "./components/pages/ItemListContainer";
import Footer from "./components/footer/Footer";
// import ContenedorIndex from "./components/pages/content";

function App() {

  const [ contador, setContador ] = useState(false);

  return (

    <Fragment>
      <div className="content">
          <Header 
            contador={contador}
          />
          
          <ItemListContainer
              contador={contador}
              setContador={setContador}
          />

          {/* <Contenedor 
            stock={stock}
            mensajeStock={mensajeStock}
            agregarProducto={agregarProducto}
            quitarProducto={quitarProducto}
          /> */}

          <Footer />
      </div>
    </Fragment>
  );
}

export default App;

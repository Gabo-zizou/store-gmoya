import React, { Fragment,useState,useEffect } from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from "./components/header/Header";
import NavBar from "./components/navBar/navBar";
// import Contenedor from "./components/pages/content";
import ItemListContainer from "./components/pages/ItemListContainer";
import ItemDetail from "./components/pages/ItemDetail";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import Contacto from "./components/pages/Contacto";
import Footer from "./components/footer/Footer";
// import ContenedorIndex from "./components/pages/content";

function App() {

  const [ contador, setContador ] = useState(0);

  return (

    <BrowserRouter>
        <div className="content">
            <Header 
              contador={contador}
            />

              <Switch>
              <Route exact path="/">
                    <Home
                        contador={contador}
                        setContador={setContador}
                    />
                </Route>
                <Route exact path="/category">
                    <ItemListContainer
                        contador={contador}
                        setContador={setContador}
                    />
                </Route>
                <Route exact path="/category/:categoriaId">
                    <ItemListContainer
                        contador={contador}
                        setContador={setContador}
                    />
                </Route>

                <Route exact path="/detail/:productId">
                    <ItemDetail 
                        contador={contador}
                        setContador={setContador}
                    />
                </Route>
                <Route exact path="/contacto">
                    <Contacto />
                </Route>

                <Route component={NotFound} />

              </Switch>

            <Footer />
        </div>
    </BrowserRouter>

    // <Fragment>
    //   <div className="content">
    //       <Header 
    //         contador={contador}
    //       />
          
    //       <ItemListContainer
    //           contador={contador}
    //           setContador={setContador}
    //       />

    //       <Footer />
    //   </div>
    // </Fragment>

  );
}

export default App;

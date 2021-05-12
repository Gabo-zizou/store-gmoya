import React, { Fragment } from 'react';

import './App.css';

import Header from "./components/header/Header";
import NavBar from "./components/navBar/navBar";
import Contenedor from "./components/pages/content"
import Footer from "./components/footer/Footer";
import ContenedorIndex from "./components/pages/content";

function App() {
  return (
    <Fragment>


    <div class="content">
        <Header />
        <NavBar />
        <Contenedor />
        <Footer />
    </div>


        {/* <Header />
        <ContenedorIndex />
        <Footer /> */}

    </Fragment>
  );
}

export default App;

import React, { Fragment } from 'react';

import './App.css';
import Contenedor from "./components/pages/index";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContenedorIndex from "./components/pages/index";

function App() {
  return (
    <Fragment>
        <Header />
        <ContenedorIndex />
        <Footer />
    </Fragment>
  );
}

export default App;

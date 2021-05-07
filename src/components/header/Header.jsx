import React from 'react';
import "./Header.css";

function Header (){
    return (
        <section className="header">
            <div className="logo">Logo Store Gmoya</div>
            <div className="navbar">
                <a class="active" href="">Home</a>
                <a href="">Quienes Somos</a>
                <a href="">Productos</a>
                <a href="">Contacto</a>
            </div>
        </section>
    );
}
export default Header;
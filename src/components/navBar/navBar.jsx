import React from 'react';
import { Link } from 'react-router-dom';

function NavBar (){

    return (
        <nav className="navbar">
                <Link to={'/'}>Productos</Link>
                <Link to={'/contacto'}>Contacto</Link>
        </nav>
    );
}
export default NavBar;
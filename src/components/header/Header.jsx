import React from 'react';
import NavBar from '../navBar/navBar';
import "./Header.css";
import ShoppingCart from '../shoppingCart/shoppingCart'

function Header ({contador}){
    return (
        <header>
            <p>Header Logo { contador }</p>
            <ShoppingCart 
                contador={contador}
            />
        </header>
    );
}
export default Header;
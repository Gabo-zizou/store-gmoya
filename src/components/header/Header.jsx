import React from 'react';
import NavBar from '../navBar/navBar';
import "./Header.css";
import ShoppingCart from '../shoppingCart/shoppingCart'

function Header (){
    return (
        <header>
            <p>Header Logo</p>
            <ShoppingCart />
        </header>
    );
}
export default Header;
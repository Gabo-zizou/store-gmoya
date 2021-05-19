import React, { Fragment } from 'react';
import NavBar from '../navBar/navBar';
import "./Header.css";

import CartWidget from '../CartWidget/CartWidget';

function Header ({contador}){
    return (
        <Fragment>
            <header>
                <p>Header Logo</p>
                <CartWidget 
                    contador={contador}
                />
            </header>
            <NavBar />
        </Fragment>
    );
}
export default Header;
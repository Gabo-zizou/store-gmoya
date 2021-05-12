import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function ShoppingCart (){
    return (
        <div className="shoppingCart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>$1.200-</span>
        </div>
    );
}
export default ShoppingCart;
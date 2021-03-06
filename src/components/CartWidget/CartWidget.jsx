import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget ({contador}){
    return (
        <div className="shoppingCart">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{ contador }</span>
        </div>
    );
}
export default CartWidget;
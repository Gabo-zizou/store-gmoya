import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ItemCount({quitarProducto,agregarProducto}) {
    return (
        <div>
            <button className="btn primary" onClick={() => quitarProducto(-1)}>
                    <FontAwesomeIcon icon={faMinus} />
            </button>
            <button className="btn secondary" onClick={() => agregarProducto(1)}>
                    <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}
export default ItemCount;
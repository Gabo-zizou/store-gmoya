import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../CartWidget/ItemCount';

function Item({ id, image, titulo, precio, stock_disponible, agregarProducto, quitarProducto}) {
    
    return (
        <div className="card" id={id}>
            <div className="id">
                Id: {id}
            </div>
            <div className="image">
                <img src={ image } width="120" />
            </div>
            <p className="titulo">{ titulo }</p>
            <span className="precio">
                Stock: { stock_disponible }
            </span>
            <span className="precio">
                ${ precio }
            </span>
                <ItemCount 
                        agregarProducto={agregarProducto}
                        quitarProducto={quitarProducto}
                        stock_disponible={stock_disponible}
                />
                
                <button>
                    Ver mas <small>(Pronto)</small><FontAwesomeIcon icon={faPlus} />
                </button>
        </div>
    )
}
export default Item;

// trabajamos en el nuevo filtro AngloAmerican
// Comienzo de solicitud de peticion de Rut
// Comienzo de mensajes de buerbujas
// Pendientes Endpoints

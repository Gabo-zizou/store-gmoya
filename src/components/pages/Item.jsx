import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ItemCount from '../CartWidget/ItemCount';
import { Link } from 'react-router-dom';

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
                
                <Link to={`/detail/${id}`}>
                    <button>
                        Ver mas <FontAwesomeIcon icon={faPlus} />
                    </button>
                </Link>
                
        </div>
    )
}
export default Item;
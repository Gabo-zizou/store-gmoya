import React from 'react'

function ItemCount({quitarProducto,agregarProducto}) {
    return (
        <div>
            <button className="btn primary" onClick={() => quitarProducto(-1)}>Quitar</button>
            <button className="btn secondary" onClick={() => agregarProducto(1)}>Agregar</button>
        </div>
    )
}
export default ItemCount;
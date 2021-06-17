import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../CartWidget/ItemCount';

function ItemDetail({detail,contador, setContador, setMensajeStock, stock, mensajeStock, agregarProducto, quitarProducto}) {

    return (
        <section id="principal">
        <div className="detalle">

            <div className="imagen">
                <img src={detail.image} width="260" />
            </div>

            <div className="parrafo">
                <p><b>Producto</b>: { detail.titulo }</p>
                <p><b>Descripción</b>: { detail.descripcion }</p>
                <p><b>Marca</b>: { detail.marca }</p>
                <p><b>Modelo</b>: { detail.modelo }</p>
                <p><b>Precio</b>: { detail.precio }</p>
                <p><b>Stock disponible</b>: { detail.cantidad }</p>

                <ItemCount 
                        agregarProducto={agregarProducto}
                        quitarProducto={quitarProducto}
                        stock_disponible={detail.cantidad}
                />
                {
                    mensajeStock
                    ?
                    <p className="mensajeError">{ mensajeStock }</p>
                    :
                    null
                }
                
            </div>

        </div>

    </section>
    )
}
export default ItemDetail;
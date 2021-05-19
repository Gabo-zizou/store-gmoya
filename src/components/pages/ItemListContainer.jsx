import React, { useState, useEffect } from 'react';
import ItemCount from '../CartWidget/ItemCount';

function ItemListContainer({contador, setContador}) {

    const [stock, setStock] = useState(5);
    const [mensajeStock, setMensajeStock] = useState(false);
  
    const agregarProducto = (value) => {
          if(contador >= stock){
            setMensajeStock('stock no disponible');
          }else{
            setContador(contador + value);
            setMensajeStock('');
          }
    };
  
    const quitarProducto = (value) => {
          if(contador < 1){
            setMensajeStock('Solo puedes quitar productos que existan, jamas negativos');
          }else{
            setContador(contador + value);
            setMensajeStock('');
          }
    }

    return (
        <section id="content">
        
            <aside>
                Aside
            </aside>

            <section id="principal">
                <div className="detalle">

                    <div>
                        <p>Producto: Mantequilla de Maní</p>
                        <p>Carro actual tiene: { contador }</p>
                        <p>Stock disponible: { stock }</p>
                        {
                            mensajeStock
                            ?
                            <p className="mensajeError">{ mensajeStock }</p>
                            :
                            null
                        }
                    </div>

                    <ItemCount 
                        agregarProducto={agregarProducto}
                        quitarProducto={quitarProducto}
                    />

                </div>

            </section>
        </section>
    )
}
export default ItemListContainer;
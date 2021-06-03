import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../CartWidget/ItemCount';

function ItemDetail({contador, setContador}) {

    const { productId } = useParams();
    const [detail, setDetail] = useState({});
    const [stock, setStock] = useState(50);
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

    useEffect(() => {
        
        const fetchDetail = async () => {
            try {
                const response = await fetch(
                    `https://api-rest-store-gmoya-default-rtdb.firebaseio.com/productos/${productId}.json`
                );
                const dataCategories = await response.json();
                setDetail(dataCategories);
                setStock(dataCategories.cantidad);
            } catch (e) {
              // reportar el error a Sentry
              console.log(e);
            }
          };
        
          if(productId){
            fetchDetail();
          }


      }, [productId]);

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
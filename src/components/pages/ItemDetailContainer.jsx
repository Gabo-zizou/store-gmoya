import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../CartWidget/ItemCount';

function ItemDetailContainer({contador, setContador}) {

    const { productId } = useParams();

    const [detail, setDetail] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
              const response = await fetch(
                    "https://api.mercadolibre.com//sites/MLA/search?q=" + productId
                );
            
              const details = await response.json();
              if(details){
                setDetail(details.results[0]);
              }

            } catch (e) {
              // reportar el error a Sentry
              console.log(e);
              setDetail(null);
            }
          };
          fetchCategories();
      }, [productId]);
    
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

    return (
        <section id="detalle">

                <div className="imagen">
                    <img src={ detail.thumbnail } width="340" />
                </div>

                <div className="parrafo">
                    <p className="condicion">{ detail.condition == 'new' ? 'Nuevo' : 'Usado'}</p>
                    <p className="titulo">{ detail.title }</p>
                    <p className="valor"><b>Valor</b>: ${ detail.price }</p>
                    <p className="stock"><b>Stock disponible</b>: { detail.available_quantity }</p>

                    <ItemCount 
                        agregarProducto={agregarProducto}
                        quitarProducto={quitarProducto}
                        stock_disponible={detail.available_quantity}
                    />

                    {
                        // mensajeStock
                        // ?
                        // <p className="mensajeError">{ mensajeStock }</p>
                        // :
                        // null
                    }
                </div>

                
        </section>
    )
}
export default ItemDetailContainer;
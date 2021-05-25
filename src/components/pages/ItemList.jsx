import React, { Fragment, useState, useEffect } from 'react';
import Item from './Item';

function ItemList({categoryActive, contador, setContador}) {

    const [cards, setCards] = useState(null);
    const [productStock, setProductStock] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch(
              `https://api.mercadolibre.com/sites/MLA/search?category=${categoryActive}#json`
            );
            const data = await response.json();
            setCards(data.results);

            let dataListArray = [];
                data.results !== undefined &&
                data.results.map( (item, index) => {
                    var data = {};
                        data.id = item.id;
                        data.stock = item.available_quantity;
                        dataListArray.push(data);
            });
            setProductStock(dataListArray);

          } catch (e) {
            // reportar el error a Sentry
            console.log(e);
          }
        };
    
        fetchProducts();
      }, [categoryActive]);

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
        <Fragment>
            {
                cards?.map((item) => (
                    <Item 
                        id={item.id}
                        image={item.thumbnail}
                        titulo={item.title}
                        precio={item.price}
                        stock_disponible={item.available_quantity}
                        agregarProducto={agregarProducto}
                        quitarProducto={quitarProducto}
                        contador={contador}
                        setContador={setContador}
                        setStock={setStock}
                    />
                ))
            }
        </Fragment>
    )
}
export default ItemList;
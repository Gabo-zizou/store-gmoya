import React, { Fragment, useState, useEffect } from 'react';
import Item from './Item';
import Loading from '../commons/Loading';

function ItemList({categoryActive, contador, setContador}) {

    const [cards, setCards] = useState(null);
    const [productStock, setProductStock] = useState([]);
    const [loading, loadingState] = useState(true);

    useEffect(() => {
      
        const fetchProducts = async () => {
          
            try {
              const response = await fetch(
                  `https://api-rest-store-gmoya-default-rtdb.firebaseio.com/productos.json`
              );
              const data = await response.json();
                  
                  let dataListArray = [];
                      data.map( (item, index) => {
                              if(item && categoryActive == item.categoria_id){
                                  dataListArray.push(item);
                              }
                      });
                      setCards(dataListArray);
                      loadingState(false);

            } catch (e) {
              // reportar el error a Sentry
              console.log(e);
            }

        };
        fetchProducts();

        // console.log('test:: ',categoryActive);

      }, [categoryActive]);


      setTimeout(function() {
          loadingState(false);
      }, 2000);

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
        <section id="principal">

            {
              loading
              ?
                  <Loading
                          type={'spin'}
                          height={60}
                          width={60}
                  />
              : 
                  cards?.map((item) => (
                      <Item 
                          key={item.id}
                          id={item.id}
                          image={item.image}
                          titulo={item.titulo}
                          precio={item.precio}
                          stock_disponible={item.cantidad}
                          agregarProducto={agregarProducto}
                          quitarProducto={quitarProducto}
                          contador={contador}
                          setContador={setContador}
                          setStock={setStock}
                      />
                  ))
            }
        </section>
    )
}
export default ItemList;
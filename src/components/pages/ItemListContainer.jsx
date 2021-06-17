import React, { useState, useEffect } from 'react';
// import ItemCount from '../CartWidget/ItemCount';
import Aside from './Aside';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

import ItemDetail from './ItemDetail';

function ItemListContainer({contador, setContador}) {
  
    const { categoriaId, productId } = useParams();

    //hooks categorias
    const [category, setCategory] = useState(null);
    const [categoryActive, setCategoryActive] = useState(null);

    //hooks productos
    const [detail, setDetail] = useState({});
    const [stock, setStock] = useState(50);
    const [mensajeStock, setMensajeStock] = useState(false);

    //categorias
    useEffect(() => {
      const fetchCategories = async () => {
          try {
            const response = await fetch(
                "https://api-rest-store-gmoya-default-rtdb.firebaseio.com/categorias.json"
            );
            const dataCategories = await response.json();

            let dataListArray = [];
                  dataCategories.map((item, index) => {
                        if(item){
                           dataListArray.push(item);
                        }
            });
            //console.log(dataListArray);
            setCategory(dataListArray);
            //mostar el primer registro
            if(dataCategories){
              setCategoryActive(dataCategories[1].id);
            }
          } catch (e) {
            // reportar el error a Sentry
            console.log(e);
          }
        };
        fetchCategories();
        // console.log(category);
    }, []);

    //detalle producto
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

    //manejo de stock
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

        {
          categoriaId
          ?
              <ItemList 
                categoryActive={categoriaId}
                contador={contador}
                setContador={setContador}
                agregarProducto={agregarProducto}
                quitarProducto={quitarProducto}
                setStock={setStock}
              />
          :
            (
              productId 
              ? 
                <ItemDetail 
                  detail={detail}
                  stock={stock}
                  setMensajeStock={setMensajeStock}
                  mensajeStock={mensajeStock}
                  agregarProducto={agregarProducto}
                  quitarProducto={quitarProducto}
                />
              :
                <Aside
                  category={category}
                  setCategoryActive={setCategoryActive}
                  categoryActive={categoryActive}
                />
            )
        }

        </section>
    )
}
export default ItemListContainer;
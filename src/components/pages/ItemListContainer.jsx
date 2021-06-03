import React, { useState, useEffect } from 'react';
// import ItemCount from '../CartWidget/ItemCount';
import Aside from './Aside';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer({contador, setContador}) {
  
    const { categoriaId } = useParams();

    const [category, setCategory] = useState(null);
    const [categoryActive, setCategoryActive] = useState(null);

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

    return (
        <section id="content">

        {
          categoriaId
          ?
              <ItemList 
                categoryActive={categoriaId}
                contador={contador}
                setContador={setContador}
              />
          :
              <Aside
                  category={category}
                  setCategoryActive={setCategoryActive}
                  categoryActive={categoryActive}
              />
        }

              


              


        </section>
    )
}
export default ItemListContainer;
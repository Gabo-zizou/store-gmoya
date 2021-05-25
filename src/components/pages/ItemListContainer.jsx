import React, { useState, useEffect } from 'react';
// import ItemCount from '../CartWidget/ItemCount';
import Aside from './aside';
import ItemList from './ItemList';

function ItemListContainer({contador, setContador}) {


    
    const [category, setCategory] = useState(null);
    const [categoryActive, setCategoryActive] = useState(null);
  


    useEffect(() => {
      const fetchCategories = async () => {
          try {
            const response = await fetch(
                "https://api.mercadolibre.com/sites/MLA/categories"
            );
            const dataCategories = await response.json();
            setCategory(dataCategories);
            if(dataCategories){
              setCategoryActive(dataCategories[0].id);
            }
          } catch (e) {
            // reportar el error a Sentry
            console.log(e);
          }
        };
        fetchCategories();
    }, []);

    return (
        <section id="content">

            <Aside
              category={category}
              setCategoryActive={setCategoryActive}
              categoryActive={categoryActive}
            />

            <section id="principal">
              <ItemList 
                categoryActive={categoryActive}
                contador={contador}
                setContador={setContador}
              />

                {/* <div className="detalle">
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
                </div> */}

            </section>
        </section>
    )
}
export default ItemListContainer;
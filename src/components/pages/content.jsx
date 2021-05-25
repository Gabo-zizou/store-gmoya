import React, { useState, useEffect } from 'react';

function Contenedor ({stock, mensajeStock, agregarProducto, quitarProducto}){
    
    const [arts, setArts] = useState({});

    // const task = new Promise((resolve, reject) => {
    //     //tarea sincrónica
    //     resolve(true);

    // });
    // task.then(result =>{
    //    console.log('no es error' + result);
    // },err => {
    //     console.log('Error: ' + err);
    // }).catch(err => {
    //     console.log('Captura cualquier error del proceso')
    //     return 'default_value';
    // }).then(fallback => {
    //     console.log(fallback);
    // });


    const operacionAsync = () => {
        setTimeout(() =>{
            console.log('hola');
        }, 2000)
    }

    /*
    const taskApi = fetch("https://cat-fact.herokuapp.com/facts");
    taskApi.then((response) => {
        console.log(response.json());
    })
    .then((data) => {
        console.log(data);
    });
    */

    const operacionAsyncQueTardaMucho = (callback) => {
        console.log('aa');
        setTimeout(() => {
          console.log("Me ejecute");
          const array = {
              id: 123,
              name: 'Producto 1',
              descripcion: 'Producto comestible test',
              stock: 20
          }
          console.log(operacionAsyncQueTardaMucho);

          callback();
        }, 3000);
      };

      useEffect(() => {
        fetch("https://api.artic.edu/api/v1/artworks")
            .then((response) => response.json())
            .then((result) => {
                setArts(result.data);
                console.log(result.data);
            })
      }, []);

    const users = [
        { nombre: 'Cristiano'},
        { nombre: 'Messi'},
        { nombre: 'Haland'},
    ];

    console.log(users.map(user => user.nombre));

    console.log(users.map(user => user.nombre).join(', '));

    return (

        console.log('object'),
        console.log(arts),

        <section id="content">
        
            <aside>
                Aside
            </aside>

            <section id="principal">
                <div className="detalle">

                    {
                        // arts.map((art) => {
                        //     <div id="cards">
                        //         { art.title }
                        //     </div>
                        // })
                    }
                    

                    <div>
                        <p>Producto: Mantequilla de Maní</p>
                        <p>Stock disponible: { stock }</p>

                        {
                            mensajeStock
                            ?
                            <p className="mensajeError">{ mensajeStock }</p>
                            :
                            null
                        }
                        
                        
                    </div>

                    <button className="btn primary" onClick={() => quitarProducto(-1)}>Quitar</button>
                    <button className="btn secondary" onClick={() => agregarProducto(1)}>Agregar</button>
                </div>

            </section>

        </section>
    );
}
export default Contenedor;
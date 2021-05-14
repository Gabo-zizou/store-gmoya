import React, { useState, useEffect } from 'react';

function Contenedor ({stock, mensajeStock, agregarProducto, quitarProducto}){
    
    return (
        <section id="content">
        
            <aside>
                Aside
            </aside>

            <section id="principal">
                <div className="detalle">

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
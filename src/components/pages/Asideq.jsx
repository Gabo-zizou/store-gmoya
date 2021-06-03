import React from 'react';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

function Aside({category, setCategoryActive, categoryActive}) {


    return (
        <div className="category">

            {
                category?.map((item) => (
                    <Link 
                            to={`/category/${item.id}`}
                            key={ item.id }
                            >
                        <div className="contenedor"
                            >
                            <img src={ item.image } width="300" height="200" className="image" />
                            <p>{ item.titulo }</p>
                        </div>
                    </Link>
                ))
            }

            {/* <ul>
                {
                    category?.map((item) => (
                        <Link 
                            to={`/category/${item.id}`}
                            key={ item.id }
                            >
                            <li
                                key={ item.id }
                                className={ categoryActive === item.id ? 'active' : null } 
                                >
                                { item.titulo }
                            </li>
                        </Link>
                    ))
                }
            </ul> */}
        </div>
    )
}
export default Aside;
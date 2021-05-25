import React from 'react';

function aside({category, setCategoryActive, categoryActive}) {
    return (
        <aside>
            <ul>
                {
                    category?.map((item) => (
                        <li key={ item.id } className={ categoryActive === item.id ? 'active' : null } onClick={() => setCategoryActive(item.id)}>{ item.name }</li>
                    ))
                }
            </ul>
        </aside>
    )
}
export default aside;
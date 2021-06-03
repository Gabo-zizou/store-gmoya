import React from 'react'
import ReactLoading from 'react-loading';

const Loading = ({ type, color, height, width }) => (
    <div style={{margin: 'auto', width: '9%', padding: '10px'}}>
        <ReactLoading type={type} color={color} height={height} width={width} />
    </div>
);
 
export default Loading;
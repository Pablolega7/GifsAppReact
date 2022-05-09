import React from 'react';
import PropsTypes from 'prop-types';

const GifGridItem = ( { title, url } ) => {

  return (
    <div className='card animate__animated animate__fadeIn'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
};

GifGridItem.protoType ={
  title: PropsTypes.string.isRequired
};

GifGridItem.protoType ={
  url: PropsTypes.string.isRequired
};

export default GifGridItem;
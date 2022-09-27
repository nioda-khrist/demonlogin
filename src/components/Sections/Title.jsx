import React from 'react';

const Title = ({ heading, img, text }) => {
  return (
    <div className='title-container'>
      <img src={img} />
      <h1 className='secondary-title'>{heading}</h1>
      <p>{text}</p>
    </div>
  );
};

export default Title;

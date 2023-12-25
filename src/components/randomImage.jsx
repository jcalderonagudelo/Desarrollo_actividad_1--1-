import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';
import './randomImage.css';

const RandomImage = () => {
  const [imageURL, setImageURL] = useState('https://picsum.photos/875/1321?random');

  const getRandomImage = () => {
    setImageURL(`https://picsum.photos/875/1321?random=${Math.random()}`);
  };

  const { count, increment } = useCounter(0);

  console.log(count);

  return (
    <div className="random-image">
      <h2 className="random-image__title">Random images</h2>
      <img src={imageURL} alt="Imagen aleatoria" className="random-image__img" />
      <p className="random-image__description">You can use the space below to generate random images for your book covers.</p>
      <button className="random-image__button general-button" onClick={getRandomImage && increment}>Cambiar imagen</button>
    </div>
  );
};

export default RandomImage;

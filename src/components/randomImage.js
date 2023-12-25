import React, { useState } from 'react';
import useCounter from '../hooks/useCounter';

const RandomImage = () => {
  const [imageURL, setImageURL] = useState('https://picsum.photos/875/1321?random');

  const getRandomImage = () => {
    setImageURL(`https://picsum.photos/875/1321?random=${Math.random()}`); // Agregamos un número aleatorio para forzar la actualización de la imagen
  };

  const { count, increment } = useCounter(0);

 console.log(count);
  

  return (
    <div>
      <h2>Random images</h2>
      <img src={imageURL} alt="Imagen aleatoria" style={imageStyles} />
      
      <p>You can use the space below to generate random images for your book covers.</p>
      <button className='general-button' style={buttonStyle}  onClick={getRandomImage && increment}>Cambiar imagen</button>
    </div>
  );
};

const imageStyles = {
  width: '400px',
  height: '604px',
  objectFit: 'cover',
  borderRadius: '3px',
  margin: '10px',
  posicion: 'relative'
};
const buttonStyle = {

  position: 'center'


}

export default RandomImage;

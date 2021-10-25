import React from 'react';
import { Image } from './thumbnail.styles';

const Thumbnail = ({ image, movieId, clickable }) => {
  return (
    <>
      <Image src={image} alt='movie-thumb' />
    </>
  );
};

export default Thumbnail;

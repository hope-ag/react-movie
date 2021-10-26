import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './thumbnail.styles';

const Thumbnail = ({ image, movieId, clickable }) => {
  return (
    <>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt='movie-thumb' />
        </Link>
      ) : (
        <Image src={image} alt='movie-thumb' />
      )}
    </>
  );
};

export default Thumbnail;

import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from './thumbnail.styles';

const Thumbnail = ({ image, hover, shadow, movieId, clickable }) => {
  return (
    <>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image hover={hover} shadow={shadow} src={image} alt='movie-thumb' />
        </Link>
      ) : (
        <Image hover={hover} shadow={shadow} src={image} alt='movie-thumb' />
      )}
    </>
  );
};

export default Thumbnail;

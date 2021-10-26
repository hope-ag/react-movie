import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import Grid from '../../shared/movie-grid/movie-grid.component';
import Spinner from '../../shared/spinner/spinner.component';
// images
import { noImage } from '../../../assets/images/no_image.jpg';
// Constants
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../core/configs/config';
// Hooks
import { useMovieFetch } from '../../../core/hooks/useMovieFetch';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { details: movie, error, loading } = useMovieFetch(movieId);
  console.log(movie);
  console.log(movieId);
  return (
    <>
      <div>Details</div>
    </>
  );
};

export default MovieDetails;

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
import Breadcrumb from './breadcrumb/breadcrumb.component';
import Hero from './hero/hero.component';
import { Text } from './hero/hero.styles';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { details: movie, error, loading } = useMovieFetch(movieId);
  console.log(movie);
  console.log(movieId);
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <div>Something went wrong...</div>;
  }
  return (
    <>
      <Breadcrumb movie={movie} />
      <Hero movie={movie} />
    </>
  );
};

export default MovieDetails;

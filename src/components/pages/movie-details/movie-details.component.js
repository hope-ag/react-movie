import React from 'react';
import { useParams } from 'react-router-dom';
// Components
import Grid from '../../shared/movie-grid/movie-grid.component';
import Spinner from '../../shared/spinner/spinner.component';
import Breadcrumb from './breadcrumb/breadcrumb.component';
import Hero from './hero/hero.component';
// import { Text } from './hero/hero.styles';
import InfoBar from './info-bar/info-bar.component';
// images
import noImage from '../../../assets/images/no_image.jpg';
// Constants
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../core/configs/config';
// Hooks
import { useMovieFetch } from '../../../core/hooks/useMovieFetch';
import Actor from '../../shared/actor/actor.component';

const MovieDetails = () => {
  const { movieId } = useParams();
  const { details: movie, error, loading } = useMovieFetch(movieId);
  console.log(movie);
  // console.log(movieId);
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
      <InfoBar movie={movie} />
      <Grid header='Actors'>
        {movie.actors.map((actor) => (
          <Actor
            key={actor.id}
            name={actor.name}
            character={actor.character}
            image={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : noImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default MovieDetails;

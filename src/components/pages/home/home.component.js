import React, { useState, useEffect } from 'react';
// Configs
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../../../core/configs/config';
// Components
import HeroImage from './hero-image/hero.image.component';
import Grid from './movie-grid/movie-grid.component';
import Thumbnail from './thumbnail/thumbnail.component';
// Hooks
import { useHomeFetch as useMovieFetch } from '../../../core/hooks/useHomeFetch';
// images
import NoImage from '../../../assets/images/no_image.jpg';
import { SpinnerContainer } from '../../shared/spinner/spinner.styles';

function Home() {
  const { movies, loading, error } = useMovieFetch();
  console.log(movies);

  return (
    <>
      {movies.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
          title={movies.results[0].original_title}
          text={movies.results[0].overview}
        />
      )}
      {loading ? (
        <SpinnerContainer />
      ) : (
        <SpinnerContainer />

        // <Grid header='Popular Movies'>
        //   {movies.results.map((movie) => (
        //     <Thumbnail
        //       key={movie.id}
        //       clickable={true}
        //       movieId={movie.id}
        //       image={
        //         movie.poster_path
        //           ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
        //           : NoImage
        //       }
        //     />
        //   ))}
        // </Grid>
      )}
    </>
  );
}

export default Home;

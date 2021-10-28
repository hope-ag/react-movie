import React, { useState, useEffect } from 'react';
// Configs
import {
  POSTER_SIZE,
  BACKDROP_SIZE,
  IMAGE_BASE_URL,
} from '../../../core/configs/config';
// Components
import HeroImage from './hero-image/hero.image.component';
import Grid from '../../shared/movie-grid/movie-grid.component';
import Thumbnail from '../../shared/thumbnail/thumbnail.component';
// Hooks
import { useHomeFetch as useMovieFetch } from '../../../core/hooks/useHomeFetch';
// images
import NoImage from '../../../assets/images/no_image.jpg';
import { SpinnerContainer } from '../../shared/spinner/spinner.styles';
import Search from '../../shared/search/search.component';
import Button from '../../shared/button/button.component';

function Home() {
  const {
    movies,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMore,
  } = useMovieFetch();
  console.log(movies);
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      {!searchTerm && movies.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movies.results[0].backdrop_path}`}
          title={movies.results[0].original_title}
          text={movies.results[0].overview}
        />
      )}
      <Search setSearchTerm={setSearchTerm} />
      {
        <Grid header={searchTerm ? 'Top Results' : 'Popular Movies'}>
          {movies.results.map((movie) => (
            <Thumbnail
              shadow={true}
              key={movie.id}
              hover
              clickable={true}
              movieId={movie.id}
              image={
                movie.poster_path
                  ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                  : NoImage
              }
            />
          ))}
        </Grid>
      }
      {loading ? (
        <SpinnerContainer />
      ) : (
        movies.page < movies.total_pages && (
          <Button text='Show More' callback={setIsLoadingMore} />
        )
      )}
    </>
  );
}

export default Home;

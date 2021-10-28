import React from 'react';
// Components
import Thumbnail from '../../../shared/thumbnail/thumbnail.component';
import { Wrapper, Content, Text } from './hero.styles';

// Configs
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../../../core/configs/config';
// images
import noImage from '../../../../assets/images/no_image.jpg';

const Hero = ({ movie }) => {
  return (
    <>
      <Wrapper noImage={noImage} backdrop={movie.backdrop_path}>
        <Content>
          <Thumbnail
            shadow
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noImage
            }
            clickable={false}
          />

          <Text>
            <h1>{movie.title}</h1>
            <h3>Plot</h3>
            <p>{movie.overview}</p>
            <div className='rating-directors'>
              <div>
                <h3>Rating</h3>
                <div className='score'>{movie.vote_average}</div>
                <h3>Director{movie.directors.length > 1 && 's'}</h3>
                {movie.directors.map((director) => (
                  <div key={director.credit_id} className='directors'>
                    {director.name}
                  </div>
                ))}
              </div>
            </div>
          </Text>
        </Content>
      </Wrapper>
    </>
  );
};

export default Hero;

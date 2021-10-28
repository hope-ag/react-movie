import React from 'react';
import { Image, Wrapper } from './actor.styles';

import { IMAGE_BASE_URL, URL } from '../../../core/configs/config';

const Actor = ({ name, character, image }) => {
  return (
    <>
      <Wrapper>
        <Image src={image} alt='actor' />
        <div className='text'>
          <h3>{name}</h3>
          <p>{character}</p>
        </div>
      </Wrapper>
    </>
  );
};

export default Actor;

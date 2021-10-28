import styled from 'styled-components';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../../../core/configs/config';

export const Wrapper = styled.section`
  width: 100%;
  background: ${(props) =>
    props.backdrop
      ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.backdrop})`
      : `url(${props.noImage}})`};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 0.5s ease-in;
  /* height: 600px; */

  @keyframes animateMovieInfo {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 100;
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  max-width: var(--max-width);
  background: rgba(0, 0, 0, 0.5);
  border-radius: 20px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
    img {
      display: block;
      width: 100%;
      max-width: unset;
      margin: 0 auto;
    }
  }
  /* img {
    flex: 1 1 1;
    max-width: 500px;
  } */
`;
export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--color-white);
  overflow: hidden;

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 25px;
    margin: 0px 0 0 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media screen and (max-width: 768px) {
      font-size: var(--font-lg);
    }
  }
`;

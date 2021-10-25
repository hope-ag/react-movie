import styled from 'styled-components';

export const Wrapper = styled.section`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 39%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${(props) => props.image});
  background-blend-mode: overlay;
  background-size: 100%, cover;
  background-position: center;
  height: 600px;
  position: relative;
  animation: animate-hero-image 1s ease-in-out;

  @keyframes animate-hero-image {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 20px;
`;

export const Text = styled.div`
  z-index: a00;
  max-width: 700px;
  position: absolute;
  bottom: 40px;
  margin-right: 20px;
  color: var(--color-white);
  h1 {
    font-size: var(--font-xl);
  }
  p {
    font-size: var(--font-md);
  }
  @media screen and (max-width: 720px) {
    max-width: 100%;
    h1 {
      font-size: var(--font-lg);
    }
    p {
      font-size: var(--font-sm);
    }
  }
`;

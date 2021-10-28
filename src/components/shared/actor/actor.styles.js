import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 400px;
  background: var(--color-dark-grey);
  color: var(--color-white);
  border-radius: 10px;
  overflow: hidden;
  padding: 2px;
  position: relative;
  transition: all 0.3s ease-in;

  .text {
    text-align: center;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    position: absolute;
    z-index: 100;
    bottom: 0;
    h3 {
      margin: 0;
    }
  }
  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  border-radius: 10px;
  position: relative;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

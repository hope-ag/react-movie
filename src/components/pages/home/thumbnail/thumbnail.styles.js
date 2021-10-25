import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: 0px 5px 10px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
    opacity: 0.8;
  }
`;

import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  box-shadow: ${(props) =>
    props.shadow ? '0px 5px 10px 0 rgba(0, 0, 0, 0.4)' : 'none'};
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: ${(props) => props.hover && 'scale(1.02)'};
    opacity: ${(props) => props.hover && '0.8'};
  }
`;

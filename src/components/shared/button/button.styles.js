import styled from 'styled-components';

export const Wrapper = styled.button`
  margin: 30px auto;
  padding: 8px 25px;
  display: block;
  border-radius: 80px;
  cursor: pointer;
  border: none;
  outline: none;
  font-weight: bold;
  font-size: var(--font-md);
  background: var(--color-dark-grey);
  color: var(--color-white);
  &:hover {
    background: var(--color-grey);
  }
`;

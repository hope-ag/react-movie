import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: var(--color-dark-grey);
`;

export const Content = styled.div`
  background-color: var(--color-grey);
  position: relative;
  width: 100%;
  max-width: var(--max-width);
  height: 55px;
  border-radius: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 20px;

  svg {
    color: var(--color-white);
    font-size: 33px;
    left: 20px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  input {
    background: none;
    outline: none;
    border: none;
    height: 100%;
    flex: 1;
    font-weight: bold;
    font-size: var(--font-md);
    color: var(--color-white);
    &::placeholder {
      font-size: var(--font-md);
      font-weight: 600;
    }
  }
`;

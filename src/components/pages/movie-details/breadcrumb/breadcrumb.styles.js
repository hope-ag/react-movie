import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-grey);
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1280px;
  padding: 20px 20px;
  color: var(--color-white);

  a {
    color: var(--color-white);
    text-decoration: none;
    font-weight: bold;
  }
`;

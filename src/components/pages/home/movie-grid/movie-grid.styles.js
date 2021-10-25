import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;

  h1 {
    color: var(--color-grey);
    @media screen and (max-width: 768px) {
      font-size: var(--font-lg);
    }
  }
`;
export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

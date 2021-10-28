import styled from 'styled-components';

export const Wrapper = styled.div`
  /* height: 100px; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background-color: var(--color-dark-grey);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width);
  /* height: 55px; */
  border-radius: 40px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 0;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Pill = styled.div`
  background-color: var(--color-grey);
  flex: 1;
  padding: 10px;
  text-align: center;
  font-weight: bold;
  min-width: 200px;
  color: var(--color-white);
  border-radius: 50px;
`;

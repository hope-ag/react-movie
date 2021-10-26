import React from 'react';

import { Wrapper, Content } from './movie-grid.styles';

const Grid = ({ header, children }) => {
  return (
    <>
      <Wrapper>
        <h1>{header}</h1>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
};

export default Grid;

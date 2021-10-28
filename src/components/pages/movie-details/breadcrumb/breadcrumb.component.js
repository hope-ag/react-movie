import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, Content } from './breadcrumb.styles';

const Breadcrumb = ({ movie }) => {
  return (
    <>
      <Wrapper>
        <Content>
          <Link to='/'>Home</Link>
          <span> / </span>
          <span>{movie.title}</span>
        </Content>
      </Wrapper>
    </>
  );
};

export default Breadcrumb;

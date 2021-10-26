import React from 'react';
import { Wrapper } from './button.styles';

const Button = ({ text, callback }) => {
  return (
    <>
      <Wrapper onClick={() => callback(true)}>{text}</Wrapper>
    </>
  );
};

export default Button;

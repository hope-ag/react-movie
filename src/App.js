import React from 'react';
import styled from 'styled-components';
import Home from './components/pages/home/home.component';
import Header from './components/shared/header/header.component';
import { GlobalStyle } from './styles/styles.global';

const Button = styled.button`
  outline: none;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  background: #f0f0f0;
  color: #333;
  font-size: 1.2rem;
  font-weight: bold;
  &:hover {
    background: #e0e0e0;
  }
`;
function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;

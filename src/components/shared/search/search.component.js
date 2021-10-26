import React from 'react';
import { useState, useEffect, useRef } from 'react';
import { Content, Wrapper } from './search.styles';
import { FaSearch } from 'react-icons/fa';

//
//
//
const Search = ({ setSearchTerm }) => {
  const [inputState, setInputState] = useState('');
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(inputState);
    }, 500);
    return () => clearTimeout(timer);
  }, [inputState, setSearchTerm]);
  return (
    <>
      <Wrapper>
        <Content>
          <FaSearch />
          <input
            type='text'
            value={inputState}
            placeholder='Search Movie'
            onChange={(e) => setInputState(e.currentTarget.value)}
          />
        </Content>
      </Wrapper>
    </>
  );
};

export default Search;

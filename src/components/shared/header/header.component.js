import React from 'react';
import TMDBLogo from '../../../assets/images/tmdb_logo.svg';
import Logo from '../../../assets/images/react-movie-logo.svg';
import { TMDBLogoImg, LogoImg, Content, Wrapper } from './header.styles';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Wrapper>
      <Content>
        <Link to='/'>
          <LogoImg src={Logo} alt='React Movie Logo' />
        </Link>
        <TMDBLogoImg src={TMDBLogo} alt='TMDb Logo' />
      </Content>
    </Wrapper>
  );
}

export default Header;

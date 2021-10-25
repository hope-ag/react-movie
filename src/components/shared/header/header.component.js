import React from 'react';
import TMDBLogo from '../../../assets/images/tmdb_logo.svg';
import Logo from '../../../assets/images/react-movie-logo.svg';
import { TMDBLogoImg, LogoImg, Content, Wrapper } from './header.styles';

function Header() {
  return (
    <Wrapper>
      <Content>
        <LogoImg src={Logo} alt='React Movie Logo' />
        <TMDBLogoImg src={TMDBLogo} alt='TMDb Logo' />
      </Content>
    </Wrapper>
  );
}

export default Header;

import React from 'react';
import styled from 'styled-components';
import Home from './components/pages/home/home.component';
import Header from './components/shared/header/header.component';
import { GlobalStyle } from './styles/styles.global';
// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from 'react-router-dom';
import MovieDetails from './components/pages/movie-details/movie-details.component';
import NotFound from './components/pages/not-found/not-found.component';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:movieId' element={<MovieDetails />} />
      <Route path='/*' element={<NotFound />} />
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;

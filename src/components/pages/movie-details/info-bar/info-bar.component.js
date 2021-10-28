import React from 'react';
import { Content, Pill, Wrapper } from './info-bar.styles';
import { convertMoney, calcTime } from '../../../../core/helpers/helpers';

const InfoBar = ({ movie }) => {
  return (
    <>
      <Wrapper>
        <Content>
          <Pill>Runtime: {calcTime(movie.runtime)}</Pill>
          <Pill>Budget: {convertMoney(movie.budget)}</Pill>
          <Pill>Revenue: {convertMoney(movie.revenue)}</Pill>
        </Content>
      </Wrapper>
    </>
  );
};

export default InfoBar;

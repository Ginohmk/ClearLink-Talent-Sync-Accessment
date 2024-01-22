import React from 'react';
import { HomeContainer } from './Home.style';
import Banner from './Banner';
import Main from './Main';

const index = () => {
  return (
    <HomeContainer>
      <Banner />
      <Main />
    </HomeContainer>
  );
};

export default index;

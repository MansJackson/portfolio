// eslint-disable-next-line
import React from 'react';
import { ReactComponent as HomeTitle } from '../images/titles/Home.svg';
import { ReactComponent as DownArrow } from '../images/arrow-down.svg';
import '../styles/Home.css';

const Home: React.FunctionComponent = (): JSX.Element => (
  <section id="home" className="home">
    <HomeTitle className="home_title" />
    <DownArrow className="home_arrow" />
  </section>
);

export default Home;

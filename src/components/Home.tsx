// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';
import { ReactComponent as HomeTitle } from '../assets/Home.svg';
import { ReactComponent as DownArrow } from '../assets/arrow-down.svg';
import '../styles/Home.css';

const Home: React.FunctionComponent = (props): JSX.Element => {
  return (
    <section id="home" className="home">
      <HomeTitle className="home_title" />
      <DownArrow className="home_arrow" />
    </section>
  );
}

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Home);
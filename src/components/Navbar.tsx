// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../types';
import '../styles/Navbar.css';

const Navbar: React.FunctionComponent = (props): JSX.Element => {
  return (
    <nav className="navbar">
      <ul className="navabr_ul">
        <li className="ul_li">Home</li>
        <li className="ul_li">About</li>
        <li className="ul_li">Contact</li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state: RootState) => ({

});

export default connect(mapStateToProps, {})(Navbar);

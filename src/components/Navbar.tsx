// eslint-disable-next-line
import React from 'react';
import { connect } from 'react-redux';
import { NavbarProps, RootState } from '../types';
import '../styles/Navbar.css';
import { setActiveLinkAction } from '../actions';

const Navbar: React.FunctionComponent<NavbarProps> = (props): JSX.Element => {
  const links = [
    'home',
    'about me',
    'skills',
    'timeline',
    'contact',
  ]
  const { setActiveLink, activeLink } = props;

  return (
    <nav className="navbar">
      <div className="navbar_home">
        <a href="#" className={`navbar_link ${activeLink === links[0] ? 'active' : null}`}>
          {links[0]}
        </a>
      </div>
      <ul className="navbar_links">
        {links.map((el, i) => {
          if (i === 0 || i === links.length - 1) return null;
          return (<li className={`navbar_link ${activeLink === el ? 'active' : null}`}>
            <a href="#">{el}</a>
          </li>)
        })}
      </ul>
      <div className="navbar_contact">
        <a href="#" className={`navbar_link ${activeLink === links[links.length - 1] ? 'active' : null}`}>
          {links[links.length - 1]}
        </a>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: RootState) => ({
  activeLink: state.activeLink
});

export default connect(mapStateToProps, { setActiveLink: setActiveLinkAction })(Navbar);

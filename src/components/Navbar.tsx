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
        <a onClick={() => setActiveLink('home')} href="#home" className={`navbar_link ${activeLink === links[0] ? 'active' : ''}`}>
          {links[0]}
        </a>
      </div>
      
      <ul className="navbar_links">
        {links.map((el, i) => {
          if (i === 0 || i === links.length - 1) return null;
          return (<li key={el} className="navbar_link">
            <a className={activeLink === el ? 'active' : ''} onClick={() => setActiveLink(el)} href={`#${el.replace(' ', '_')}`}>{el}</a>
          </li>)
        })}
      </ul>

      <div className="navbar_contact">
        <a onClick={() => setActiveLink('contact')} className={`navbar_link ${activeLink === links[links.length - 1] ? 'active' : ''}`}>
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

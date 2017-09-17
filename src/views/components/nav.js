import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navbar" >
    <div className="navbar-brand">
      <Link to={'/'} className="navbar-item" >BREH</Link>
    </div>
    <div className="navbar-start">
      <Link to={'/workout'} className="navbar-item">WORKOUT</Link>
      <Link to={'/nutrition'} className="navbar-item">NUTRITION</Link>
    </div>
  </nav>
);

export default Nav;

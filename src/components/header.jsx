import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink to="/">Eli Zegers</NavLink>
    <nav>
      <NavLink to="/paintings">Paintings</NavLink>
      <NavLink to="/drawings">Drawings</NavLink>
      <NavLink to="/sculptures">Sculptures</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/about">CV</NavLink>
    </nav>
  </header>
);

export default Header;

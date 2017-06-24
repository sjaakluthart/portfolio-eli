import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <NavLink exact to="/">Eli Zegers</NavLink>
    <nav>
      <NavLink to="/paintings">Paintings</NavLink>
      <NavLink to="/drawings">Drawings</NavLink>
      <NavLink to="/sculptures">Sculptures</NavLink>
      <NavLink to="/cv">CV</NavLink>
    </nav>
  </header>
);

export default Header;

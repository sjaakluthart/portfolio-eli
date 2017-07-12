import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import map from 'lodash/map';

const propTypes = {
  collections: PropTypes.instanceOf(Object).isRequired
};

const Header = ({ collections }) => (
  <header>
    <NavLink exact to="/">Eli Zegers</NavLink>
    <nav>
      {map(collections, collection => (
        <NavLink key={collection.id} to={`/collection/${collection.id}`}>
          {collection.title}
        </NavLink>
      ))}
      <NavLink to="/about">ABOUT</NavLink>
      <NavLink to="/cv">CV</NavLink>
    </nav>
  </header>
);

Header.propTypes = propTypes;

export default Header;

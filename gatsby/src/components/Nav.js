import React from 'react';
import { Link } from 'gatsby';
import NavStyles from './Nav.style';

const Nav = () => (
  <NavStyles>
    <li>
      <h4>
        <Link to="/">Home</Link>
      </h4>
    </li>
    <li>
      <h4>
        <Link to="/gourmands">Gourmands</Link>
      </h4>
    </li>
    <li>
      <h4>
        <Link to="/food">Food</Link>
      </h4>
    </li>
  </NavStyles>
);

export default Nav;

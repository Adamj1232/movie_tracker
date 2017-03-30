import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <NavLink
        to='/'
        activeClassName='selected'>
        Home
      </NavLink>
      <NavLink
        to='/login'
        activeClassName='selected'>
        User Login
      </NavLink>
    </nav>
  )
}

export default NavBar;
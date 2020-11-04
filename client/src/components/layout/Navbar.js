import React, { Fragment, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link className='navLink text-white' to='/search'>
          Search
        </Link>
      </li>
      <li className='userName'>
        {' '}
        {/* {user && 'My'}{' '} */}
        <Link className='navLink text-white' to='/'>
          Saved recipes
        </Link>
      </li>
      <li>
        <a className='navLink' onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt text-white'></i>
          <span className=' hide-sm text-white'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link className='navLink text-white' to='/search'>
          Search
        </Link>
      </li>
      <li>
        <Link className='navLink text-white' to='/register'>
          Register
        </Link>
        <span> | </span>
        <Link className='navLink text-white' to='/login'>
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar  bg-dark'>
      <h1 className='sitename text-white'>
        <i id='iconSize' className={icon} /> {title}
      </h1>
      <ul className='links'>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'COOKBOOK',
  icon: 'fas fa-utensils',
};
export default Navbar;

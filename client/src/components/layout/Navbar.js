import React, { Fragment, useContext } from 'react';
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
      <li className='userName'> Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href='#!'>
          <i className='fas fa-sign-out-alt text-white'></i>
          <span className='hide-sm text-white'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link className='text-white' to='/register'>
          Register
        </Link>
      </li>
      <li>
        <Link className='text-white' to='/login'>
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-success'>
      <h1 className='sitename'>
        <i id='iconSize' className={icon} /> {title}
      </h1>
      <ul className='links'>
        <li className='text-white'>
          <Link className='text-white' to='/'>
            Search
          </Link>
        </li>

        {/* <li>
          <Link className='text-white' to='/about'>
            About
          </Link>
        </li> */}
        {isAuthenticated ? authLinks : guestLinks}
        <li>
          <Link className='text-white' to='/about'>
            <button className='btn btn-danger btn-sm'>Your recipes</button>
          </Link>
        </li>
      </ul>
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

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Navbar({ title, icon }) {
  return (
    <div className='navbar bg-success'>
      <h1 className='sitename'>
        <i id='iconSize' className={icon} /> {title}
      </h1>
      <ul className='links'>
        <li className='text-white'>
          <Link className='text-white' to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='text-white' to='/about'>
            About
          </Link>
        </li>
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

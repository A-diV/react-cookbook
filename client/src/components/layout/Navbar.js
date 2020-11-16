import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';
import RecipeContext from '../../context/recipe/recipeContext';

function Navbar({ title, icon }) {
  const authContext = useContext(AuthContext);
  const recipeContext = useContext(RecipeContext);

  const { isAuthenticated, logout } = authContext;
  const { clearRecipes } = recipeContext;

  const onLogout = () => {
    logout();
    clearRecipes();
  };

  const authLinks = (
    <Fragment>
      <li>
        <NavLink
          activeClassName='selected'
          activeStyle={{
            borderBottom: 'solid',
            borderBottomWidth: 'thin',
          }}
          className='navLink text-white mr-3 pb-1'
          to='/search'
        >
          Search
        </NavLink>
      </li>
      <li className='userName'>
        {' '}
        {/* {user && 'My'}{' '} */}
        <NavLink
          activeClassName='selected'
          activeStyle={{
            borderBottom: 'solid',
            borderBottomWidth: 'thin',
          }}
          className='navLink text-white pb-1 mr-3 '
          to='/savedRecipes'
        >
          Saved recipes
        </NavLink>
      </li>
      <li>
        <a className='navLink' onClick={onLogout} href='/search'>
          <i className='fas fa-sign-out-alt text-white'></i>
          <span className=' hide-sm text-white'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <NavLink
          activeClassName='selected'
          activeStyle={{
            borderBottom: 'solid',
            borderBottomWidth: 'thin',
          }}
          className='navLink text-white mr-3 pb-1'
          to='/search'
        >
          Search
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName='selected'
          activeStyle={{
            borderBottom: 'solid',
            borderBottomWidth: 'thin',
          }}
          className='navLink text-white pb-1'
          to='/register'
        >
          Register
        </NavLink>
        <span className='pipe'> | </span>
        <NavLink
          activeClassName='selected'
          activeStyle={{
            borderBottom: 'solid',
            borderBottomWidth: 'thin',
          }}
          className='navLink text-white pb-1'
          to='/login'
        >
          Login
        </NavLink>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar '>
      <h1 className='sitename text-white'>
        <i id='iconSize' className={icon} /> {title}
      </h1>
      <ul className='links nav justify-content-end'>
        {isAuthenticated ? authLinks : guestLinks}
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

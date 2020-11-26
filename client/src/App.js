import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SavedRecipes from './components/pages/SavedRecipes';
// import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layout/Alerts';
import Search from './components/recipes/Search';
import Footer from './components/layout/Footer';

import RecipeState from './context/recipe/RecipeState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import PrivateRoute from './components/routing/PrivateRoute';

import setAuthToken from './utils/setAuthToken';

import './App.css';
import SearchByIngredient from './components/recipes/SearchByIngredient';
import SearchByName from './components/recipes/SearchByName';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <RecipeState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
               
                  <PrivateRoute
                    exact
                    path='/savedRecipes'
                    component={SavedRecipes}
                  />
                   <Route exact path={['/', '/search']}component={Search}/>
                  {/* <Route exact path='/search' component={Search} /> */}
                  {/* <Route exact path='/about' component={About} /> */}
                  <Route exact path='/register' component={Register} />
                  <Route exact path='/login' component={Login} />
                  <Route  path='/'><h1 className='text-center text-danger text-wrap mt-4'>OOPS...<br/> Page not found</h1></Route>
               
                </Switch>
              </div>

              <Footer />
            </Fragment>
          </Router>
        </AlertState>
      </RecipeState>
    </AuthState>
  );
};

export default App;

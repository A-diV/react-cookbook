import React, { useContext, useEffect } from 'react';
//mport RecipeState from '../../context/recipe/RecipeState';
import Recipes from '../recipes/Recipes';
import RecipeFilter from '../recipes/RecipeFilter';
import AuthContext from '../../context/auth/authContext';

const SavedRecipes = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className='container-fluid '>
      <div className='row justify-content-center '>
        <div className='jumbotron col-12 col-md-10 mt-5 '>
          <div className='row p-2'>
            <div className='col '>
              <RecipeFilter />
              <h1 className='savedRecipesH1 text-white text-center font-italic'>
                Saved Recipes
              </h1>
              <div className='container'>
                <div className='row text-white font-weight-bold  border-top border-bottom border-2  p-1 mb-1'>
                  <div className='col-2'>IMG</div>
                  <div className='col'>Name</div>
                  <div className='col'>Label</div>
                  <div className='col'>Action</div>
                </div>
              </div>
              <Recipes />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedRecipes;

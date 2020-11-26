import React, { useContext, useEffect, useState } from 'react';
//mport RecipeState from '../../context/recipe/RecipeState';
import Recipes from '../recipes/Recipes';
import RecipeFilter from '../recipes/RecipeFilter';
import AuthContext from '../../context/auth/authContext';

const SavedRecipes = () => {
  const authContext = useContext(AuthContext);

  const [rec, setRec] = useState('');

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
              <h1 className='savedRecipesH1 text-white text-center font-italic '>
                {rec > 1
                  ? rec + ' Saved Recipes'
                  : rec === 0
                  ? 'Saved Recipes'
                  : rec + ' Saved Recipe'}
              </h1>
              <div className='container'>
                <div className='row text-white font-weight-bold  border-top border-bottom border-2  p-1 mb-1'>
                  <div className='col-2 text-center'>IMG</div>
                  <div className='col'>Name</div>
                  <div className='col'>Label</div>
                  <div className='col text-center'>Action</div>
                </div>
              </div>
              <Recipes countRecipes={(count) => setRec(count)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavedRecipes;

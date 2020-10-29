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
    <div className='container-fluid'>
      <div className='row justify-content-center'>
        <div className='jumbotron col-12 col-md-10 mt-5 '>
          <div className='row p-2'>
            <div className='col '>
              <RecipeFilter />
              <h1 className='card bg-danger text-center font-weight-bold font-italic text-white'>
                Saved Recipes
              </h1>

              <div className='d-flex justify-content-between'>
                <div>
                  <h6 className=' text-center text-danger font-weight-bold ml-5'>
                    IMG
                  </h6>
                </div>
                <div>
                  <h6 className=' text-center text-danger font-weight-bold mr-4'>
                    Name
                  </h6>
                </div>
                <div>
                  <h6 className=' text-center text-danger font-weight-bold mr-5'>
                    Label
                  </h6>
                </div>
                <div>
                  <h6 className=' text-center text-danger font-weight-bold mr-5'>
                    Actions
                  </h6>
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

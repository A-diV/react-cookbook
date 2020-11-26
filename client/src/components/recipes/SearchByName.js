import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
// import { ADD_RECIPE } from '../../context/types';
import Spinner from '../layout/Spinner';
import AuthContext from '../../context/auth/authContext';
import RecipeContext from '../../context/recipe/recipeContext';

const SearchByName = () => {
  const [recipesFromAPI, setRecipes] = useState({
    recipesObj: {},
    loading: false,
  });

  const recipeContext = useContext(RecipeContext);
  const { addRecipe, recipes, getRecipes, deleteRecipe } = recipeContext;

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  const [searchStr, setSearchStr] = useState('');
  const onChange = (e) => setSearchStr(e.target.value);

  const fetchData = async () => {
    try {
      setRecipes({ ...recipesFromAPI, loading: true });

      const res = await axios.get(
        `https://api.edamam.com/search?q=${searchStr}&app_id=${process.env.REACT_APP_COOKBOOK_API_ID}&app_key=${process.env.REACT_APP_COOKBOOK_API_SECRET}&from=0&to=10`
      );
      setRecipes({ recipesObj: res.data, loading: false });
      setSearchStr('');
    } catch (err) {
      console.error(err);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };

  useEffect(() => {
    getRecipes();
    if (searchStr !== '') {
    }
    // eslint-disable-next-line
  }, [recipesFromAPI]);

  const removeRecipe = (recipe) => {
    const { image } = recipe;
    if (recipes.length === 1) {
      deleteRecipe(recipes[0]._id);
    } else {
      let toRemove = recipes.find((rec) => rec.image === image);
      deleteRecipe(toRemove._id);
    }
  };

  const isSavedRecipe = (img) => {
    if (recipes.length === 0) {
      return 'fa fa-heart-o';
    } else if (recipes.length === 1) {
      if (recipes[0].image === img) {
        return 'fa fa-heart';
      } else {
        return 'fa fa-heart-o';
      }
    } else {
      if (recipes.find((rec) => rec.image === img)) {
        return 'fa fa-heart';
      } else {
        return 'fa fa-heart-o';
      }
    }
  };

  const changeClass = (e, recipe) => {
    //e.stopPropagation();
    if (e.target.className === 'fa fa-heart-o') {
      e.target.className = 'fa fa-heart';
      addRecipe(recipe);
    } else {
      e.target.className = 'fa fa-heart-o';
      removeRecipe(recipe);
    }
  };

  return (
    <div className='jumbotron p-1 mt-3 '>
      <div className='row'>
        <div className='col mx-auto form pl-4 pr-4'>
          <div className='px-2 '>
            <form onSubmit={onSubmit}>
              <h1 className='text-center text-white font-italic text-wrap searchH1'>
                Search by recipe name
              </h1>
              <div className='form-group'>
                <label className='text-white' htmlFor='recipe'>
                  Recipe name:
                </label>
                <input
                  className='form-control '
                  value={searchStr || ''}
                  name='recipeName'
                  type='text'
                  id='recipeName'
                  placeholder='E.g. lasagna'
                  onChange={onChange}
                  required
                />
              </div>

              <div className='form-group'>
                <button type='submit' className='cust-btn btn btn-block'>
                  Search
                </button>
              </div>
            </form>
            {recipesFromAPI.loading ? (
              <Spinner />
            ) : (
              <div className='col-14 '>
                <div className='mt-6 row'>
                  {JSON.stringify(recipesFromAPI.recipesObj) !==
                    JSON.stringify({}) &&
                    recipesFromAPI.recipesObj.hits.map((recipe) => (
                      <div key={uuid()} className='col-md-6 '>
                        <div key={recipe.recipe.image} className='card-body '>
                          <div className='card-img-top border border-white'>
                            {isAuthenticated && (
                              <i
                                onClick={(e) => changeClass(e, recipe.recipe)}
                                className={isSavedRecipe(recipe.recipe.image)}
                                aria-hidden='true'
                              ></i>
                            )}

                            <img
                              alt=''
                              className='card-img-top embed-responsive-item'
                              src={recipe.recipe.image}
                            />
                          </div>
                          <div className='card-footer border border-white text-white text-wrap'>
                            <h3 className='text-center textColor text-capitalize'>
                              {recipe.recipe.label}
                            </h3>
                            <span className='font-weight-bold  textColor'>
                              Ingredient details:
                            </span>
                            <br />
                            <p key={recipe.recipe.image} className='textColor'>
                              {recipe.recipe.ingredientLines
                                .toString()
                                .replace(/,/g, ', ') + '.'}
                            </p>
                            <p className='textColor font-weight-bold '>
                              Link to preparation page:{' '}
                              <a href={recipe.recipe.url}>
                                <i
                                  title='Click me'
                                  className='fas fa-external-link-alt linkTo pl-2'
                                ></i>{' '}
                              </a>
                            </p>
                            <p className='textColor border text-center p-2 font-weight-bold'>
                              Additional information
                            </p>
                            <div className='text-wrap  align-it align-content-end'>
                              <span className='textColor font-weight-bold'>
                                Total Calories:{' '}
                                {(' ', Math.round(recipe.recipe.calories))}
                              </span>
                              <br />
                              <span className='textColor font-weight-bold'>
                                Servings: {(' ', recipe.recipe.yield)}
                              </span>
                              <br />
                              <span className='textColor font-weight-bold'>
                                Diet Labels:{' '}
                                {
                                  (' ',
                                  recipe.recipe.dietLabels.length > 0 ? (
                                    recipe.recipe.dietLabels.map((label) => (
                                      <span
                                        key={uuid()}
                                        className='badge badge-pill badge-success'
                                      >
                                        {label}
                                      </span>
                                    ))
                                  ) : (
                                    <span className='badge badge-pill badge-warning'>
                                      Undefined
                                    </span>
                                  ))
                                }
                              </span>
                              <br />
                              <span className='textColor font-weight-bold'>
                                {
                                  <div className='row healthLabelRow'>
                                    <div className='col-5.5 ml-3 mr-1'>
                                      Health Label:
                                    </div>
                                    <div className='col-6 text-wrap healthLabelCol'>
                                      {recipe.recipe.healthLabels.map(
                                        (label) => (
                                          <span
                                            key={uuid()}
                                            className='badge badge-pill badge-success text-wrap'
                                          >
                                            {label}
                                          </span>
                                        )
                                      )}
                                    </div>
                                  </div>
                                }
                              </span>
                              <div />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByName;

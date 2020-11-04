import React, { useState, useEffect } from 'react';
import axios from 'axios';
import uuid from 'react-uuid';
// import recipeContext from '../../context/recipe/recipeContext';
// import Spinner from '../layout/Spinner';

const SearchByName = () => {
  const [recipes, setRecipes] = useState({
    recipesObj: {},
    loading: false,
  });

  const [searchStr, setSearchStr] = useState('');

  const onChange = (e) => setSearchStr(e.target.value);

  const fetchData = async () => {
    try {
      setRecipes({ ...recipes, loading: true });

      const res = await axios.get(
        `https://api.edamam.com/search?q=${searchStr}&app_id=${process.env.REACT_APP_COOKBOOK_API_ID}&app_key=${process.env.REACT_APP_COOKBOOK_API_SECRET}&from=0&to=4`
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
    if (searchStr !== '') {
    }
    // eslint-disable-next-line
  }, [recipes]);

  return (
    <div className='jumbotron p-1 mt-3 '>
      <div className='row'>
        <div className='col mx-auto form pl-4 pr-4'>
          <div className='px-2 '>
            <form onSubmit={onSubmit}>
              <h1 className='text-center text-white font-italic'>
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
            <div className='col-14 '>
              <div className='mt-6 row'>
                {JSON.stringify(recipes.recipesObj) !== JSON.stringify({}) &&
                  recipes.recipesObj.hits.map((recipe) => (
                    <div key={uuid()} className='col-md-6 '>
                      <div key={recipe.image} className='card-body '>
                        <div className='card-img-top border border-white'>
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
                                    Undifined
                                  </span>
                                ))
                              }
                            </span>
                            <br />
                            <span className='textColor font-weight-bold'>
                              {
                                <div className='row '>
                                  <div className='col-5.5 ml-3 mr-1'>
                                    Health Label:
                                  </div>
                                  <div className='col-6 pl-0 pr-0 text-wrap '>
                                    {recipe.recipe.healthLabels.map((label) => (
                                      <span
                                        key={uuid()}
                                        className='badge badge-pill badge-success '
                                      >
                                        {label}
                                      </span>
                                    ))}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByName;

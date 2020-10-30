import React, { useState, useEffect } from 'react';
import axios from 'axios';
import recipeContext from '../../context/recipe/recipeContext';

const SearchByName = () => {
  const [apiResource, setApiResource] = useState({
    recipes: [
      {
        url:
          'https://www.edamam.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg',
      },
      {
        url:
          'https://www.edamam.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg',
      },
      {
        url:
          'https://www.edamam.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg',
      },
    ],
  });

  // useEffect(() => {
  //   console.log(
  //     'https://www.edamam.com/web-img/348/348a79afd37686c2ec0ee5d57afadce8.jpg'
  //   );
  // }, [apiResource]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };

  return (
    <div className='jumbotron p-1 mt-3 border border-white'>
      <div className='row'>
        <div className='col mx-auto form p-4'>
          <div className='px-2 '>
            <form onSubmit={onSubmit}>
              <h1 className='text-center text-white font-italic'>
                Search by recipe name
              </h1>
              <div className='form-group'>
                <label className='text-white' htmlFor='email'>
                  Recipe name:
                </label>
                <input
                  className='form-control '
                  type='text'
                  id='recipeName'
                  name='recipeName'
                  //value=
                  placeholder='E.g. lasagna'
                  required
                />
              </div>

              <div className='form-group'>
                <button type='submit' className='cust-btn btn btn-block'>
                  Search
                </button>
              </div>
            </form>
            <div className='row'>
              <div className='card-body '>
                <div className='card-img-top border border-white'>
                  <img
                    alt=''
                    className='card-img-top embed-responsive-item'
                    src={apiResource.recipes[0].url}
                  />
                </div>
                <div className='card-footer border border-white text-white'>
                  Lasagna
                </div>
              </div>
              <div className='card-body'>
                <div className='card-img-top border border-white'>
                  <img
                    alt=''
                    className='card-img-top embed-responsive-item'
                    src={apiResource.recipes[0].url}
                  />
                </div>
                <div className='card-footer text-white border border-white'>
                  Lasagna
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByName;

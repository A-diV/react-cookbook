import React from 'react';

const SearchByIngredient = () => {
  return (
    <div className='jumbotron p-1 mt-3 '>
      <div className='row'>
        <div className='col mx-auto form  pl-4 pr-4'>
          <div className='px-2 '>
            <form>
              <h1 className='text-center text-white font-italic text-wrap searchH1'>
                Search by ingredient
              </h1>
              <div className='form-group'>
                <label htmlFor='ingredient' className='text-white'>
                  Ingredient:
                </label>
                <input
                  className='form-control'
                  type='text'
                  id='recipeName'
                  name='recipeName'
                  placeholder='E.g. salmon'
                  required
                />
              </div>

              <div className='form-group'>
                <button type='submit' className='cust-btn btn btn-block'>
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByIngredient;

import React from 'react';

const SearchByIngrediant = () => {
  return (
    <div className='jumbotron p-1 mt-3 border border-white'>
      <div className='row'>
        <div className='col mx-auto form p-4'>
          <div className='px-2 '>
            <form>
              <h1 className='text-center text-white font-italic'>
                Search by ingrediant
              </h1>
              <div className='form-group'>
                <label htmlFor='ingrediant' className='text-white'>
                  Ingrediant:
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

export default SearchByIngrediant;

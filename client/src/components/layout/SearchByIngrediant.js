import React from 'react';

const SearchByIngrediant = () => {
  return (
    <div className='jumbotron p-1 mt-3'>
      <div className='row'>
        <div className='col mx-auto form p-4'>
          <div className='px-2 '>
            <form>
              <h1 className='text-center text-success font-italic'>
                Search by ingrediant
              </h1>
              <div className='form-group'>
                <label htmlFor='email'>Recipe name:</label>
                <input
                  className='form-control'
                  type='text'
                  id='recipeName'
                  name='recipeName'
                  placeholder='E.g. salmon'
                  //value={email}
                  //onChange={onChange}
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

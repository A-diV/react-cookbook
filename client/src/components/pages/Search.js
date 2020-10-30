import React, { useState } from 'react';

import SearchByName from '../layout/SearchByName';
import SearchByIngrediant from '../layout/SearchByIngrediant';
import CustomSearch from '../layout/CustomSearch';

const Search = () => {
  const [selected, setSelected] = useState('name');

  return (
    <div>
      <div className='d-flex row mt-2'>
        <div className='col-md-12'>
          <label className='radio text-white'>
            Search by recipe name
            <input
              type='radio'
              id='name'
              name='name'
              value='name'
              checked={selected === 'name'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className='checkround'></span>
          </label>
          <label className='radio text-white'>
            Search by ingrediant
            <input
              type='radio'
              id='ingrediant'
              name='ingrediant'
              value='ingrediant'
              checked={selected === 'ingrediant'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className='checkround'></span>
          </label>
          <label className='radio text-white'>
            Customized search
            <input
              type='radio'
              id='custom'
              name='custom'
              value='custom'
              checked={selected === 'custom'}
              onChange={(e) => setSelected(e.target.value)}
            />
            <span className='checkround'></span>
          </label>
        </div>
      </div>
      {selected === 'name' && <SearchByName />}
      {selected === 'ingrediant' && <SearchByIngrediant />}
      {selected === 'custom' && <CustomSearch />}
    </div>
  );
};

export default Search;

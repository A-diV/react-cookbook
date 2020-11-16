import React, { useState } from 'react';

import SearchByName from './SearchByName';
import SearchByIngrediant from './SearchByIngrediant';
// import CustomSearch from './CustomSearch';

const Search = () => {
  const [selected, setSelected] = useState('name');

  return (
    <div className='anyClass'>
      <div className='row mt-2'>
        <div className='col-md-12'>
          <label className='radio text-white mb-3 mt-3'>
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
          {/* <label className='radio text-white'>
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
          </label> */}
        </div>
      </div>
      {selected === 'name' && <SearchByName />}
      {selected === 'ingrediant' && <SearchByIngrediant />}
      {/* {selected === 'custom' && <CustomSearch />} */}
    </div>
  );
};

export default Search;

import React, { useContext, useRef, useEffect } from 'react';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeFilter = () => {
  const recipeContext = useContext(RecipeContext);
  const text = useRef('');
  const { filterRecipes, clearFilter, filtered } = recipeContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = '';
    }
  });

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterRecipes(e.target.value); //
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <div className='form-group'>
        <input
          className='form-control input-sm'
          type='text'
          placeholder='Filter recipes...'
          ref={text}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default RecipeFilter;

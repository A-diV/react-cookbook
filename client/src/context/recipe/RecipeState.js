import React, { useReducer } from 'react';
//import uuid from 'uuid';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';
import {
  //ADD_RECIPE,
  DELETE_RECIPE,
  FILTER_RECIPES,
  CLEAR_FILTER,
  //SET_ALERT,
  //REMOVE_ALERT,
} from '../types';

const RecipeState = (props) => {
  const initialState = {
    recipes: [
      {
        healthLabel: 'health',
        _id: '5f8ef1e6bac15c8723c16493',
        label: 'Apple123',
        image: 'IMG000',
        url: 'URL',
        user: '5f8eb69f953e1a7441495da6',
        __v: 0,
      },
      {
        healthLabel: 'health',
        _id: '5f8ef206bac15c8723c16494',
        label: 'Pear',
        image: 'IMGvvv',
        url: 'URL',
        user: '5f8eb69f953e1a7441495da6',
        __v: 0,
      },
      {
        healthLabel: 'undefined',
        _id: '5f8ef307f163ff876d819f86',
        label: 'Plum',
        image: 'IMG0vv',
        url: 'URL',
        user: '5f8eb69f953e1a7441495da6',
        __v: 0,
      },
    ],
    filtered: null,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // ADD Recipe

  // Delete Recipe
  const deleteRecipe = (_id) => {
    dispatch({ type: DELETE_RECIPE, payload: _id });
  };
  // Filter Recipies
  const filterRecipes = (text) => {
    dispatch({ type: FILTER_RECIPES, payload: text });
  };
  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };
  // Set Alert

  // Remove Alert

  return (
    <RecipeContext.Provider
      value={{
        recipes: state.recipes,
        filtered: state.filtered,
        deleteRecipe,
        filterRecipes,
        clearFilter,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;

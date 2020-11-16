import React, { useReducer } from 'react';
//import uuid from 'uuid';
import RecipeContext from './recipeContext';
import recipeReducer from './recipeReducer';
import {
  ADD_RECIPE,
  GET_RECIPES,
  RECIPE_ERROR,
  DELETE_RECIPE,
  FILTER_RECIPES,
  CLEAR_FILTER,
  CLEAR_RECIPES,
  //SET_ALERT,
  //REMOVE_ALERT,
} from '../types';
import axios from 'axios';

const RecipeState = (props) => {
  const initialState = {
    recipes: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(recipeReducer, initialState);

  // GET Recipes
  const getRecipes = async () => {
    try {
      const res = await axios.get('/api/recipes');

      dispatch({ type: GET_RECIPES, payload: res.data });
    } catch (err) {
      dispatch({ type: RECIPE_ERROR, payload: err.response.msg });
    }
  };

  // ADD Recipe
  const addRecipe = async (recipe) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        //'Content-Type': 'text/plain',
      },
    };
    try {
      const res = await axios.post('/api/recipes', recipe, config);

      dispatch({ type: ADD_RECIPE, payload: res.data });
    } catch (err) {
      dispatch({ type: RECIPE_ERROR, payload: err.response.msg });
    }
  };

  // Delete Recipe
  const deleteRecipe = async (id) => {
    try {
      dispatch({ type: DELETE_RECIPE, payload: id });
      await axios.deleteRecipe(`/api/recipes/'${id}`);
      dispatch({ type: DELETE_RECIPE, payload: id });
      console.log(id);
    } catch (err) {
      // dispatch({ payload: err.response.msg });
      dispatch({ type: DELETE_RECIPE, payload: err.response.msg });
    }
  };

  //CLEAR Recipes
  const clearRecipes = () => {
    dispatch({ type: CLEAR_RECIPES });
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
        error: state.error,
        deleteRecipe,
        filterRecipes,
        clearFilter,
        addRecipe,
        getRecipes,
        clearRecipes,
      }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeState;

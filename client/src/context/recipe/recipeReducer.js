import {
  GET_RECIPES,
  ADD_RECIPE,
  DELETE_RECIPE,
  FILTER_RECIPES,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
  RECIPE_ERROR,
  CLEAR_RECIPES,
} from '../types';

const recipeReducer = (state, action) => {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        loading: false,
      };
    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
        loading: false,
      };

    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
        loading: false,
      };
    case FILTER_RECIPES:
      return {
        ...state,
        filtered: state.recipes.filter((recipe) => {
          const regex = new RegExp(`${action.payload}`, `gi`);
          return recipe.label.match(regex) || recipe.healthLabel.match(regex);
        }),
      };
    case CLEAR_RECIPES:
      return {
        ...state,
        recipes: null,
        filtered: null,
        error: null,
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case RECIPE_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;

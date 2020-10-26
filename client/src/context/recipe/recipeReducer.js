import {
  //ADD_RECIPE,
  DELETE_RECIPE,
  FILTER_RECIPES,
  CLEAR_FILTER,
  //SET_ALERT,
  //REMOVE_ALERT,
} from '../types';

const recipeReducer = (state, action) => {
  switch (action.type) {
    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe._id !== action.payload
        ),
      };
    case FILTER_RECIPES:
      return {
        ...state,
        filtered: state.recipes.filter((recipe) => {
          const regex = new RegExp(`${action.payload}`, `gi`);
          return recipe.label.match(regex) || recipe.healthLabel.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    default:
      return state;
  }
};

export default recipeReducer;

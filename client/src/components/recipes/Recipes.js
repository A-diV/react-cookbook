import React, { Fragment, useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RecipeItem from './RecipeItem';
import RecipeContext from '../../context/recipe/recipeContext';

const Recipes = () => {
  const recipeContex = useContext(RecipeContext);

  const { recipes, filtered } = recipeContex;
  if (recipes.length === 0) {
    return (
      <div className='col-sm border text-center text-white font-weight-bold font-italic p-2'>
        <h4>You have no saved recipes</h4>
      </div>
    );
  }

  return (
    <Fragment>
      {/* <TransitionGroup> */}
      {filtered !== null
        ? filtered.map((recipe) => (
            // <CSSTransition key={recipe.id} timeout={500} classNames='item'>
            <RecipeItem key={recipe.id} recipe={recipe} />
            // </CSSTransition>
          ))
        : recipes.map((recipe) => (
            // <CSSTransition key={recipe.id} timeout={500} classNames='item'>
            <RecipeItem key={recipe.id} recipe={recipe} />
            // </CSSTransition>
          ))}
      {/* </TransitionGroup> */}
    </Fragment>
  );
};

export default Recipes;

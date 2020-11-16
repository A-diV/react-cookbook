import React, { Fragment, useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import RecipeItem from './RecipeItem';
import RecipeContext from '../../context/recipe/recipeContext';
import Spinner from '../layout/Spinner';

const Recipes = () => {
  const recipeContex = useContext(RecipeContext);

  const { recipes, filtered, getRecipes, loading } = recipeContex;

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  }, []);
  if (recipes !== null && recipes.length === 0 && !loading) {
    return (
      <div className='col-sm  text-center text-white font-weight-bold font-italic p-2'>
        <h4>You have no saved recipes</h4>
      </div>
    );
  }

  return (
    <Fragment>
      {(recipes !== null) & !loading ? (
        <TransitionGroup>
          {filtered !== null
            ? filtered.map((recipe) => (
                <CSSTransition key={recipe._id} timeout={500} classNames='item'>
                  <RecipeItem key={recipe._id} recipe={recipe} />
                </CSSTransition>
              ))
            : recipes.map((recipe) => (
                <CSSTransition key={recipe._id} timeout={500} classNames='item'>
                  <RecipeItem key={recipe._id} recipe={recipe} />
                </CSSTransition>
              ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Recipes;

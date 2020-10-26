import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext);

  const { deleteRecipe } = recipeContext;

  const { _id, label, healthLabel, image } = recipe; //url

  const onDelete = () => {
    deleteRecipe(_id);
  };

  if (recipe) {
    return (
      <div className='container-fluid'>
        <div className='row bg-light mb-3 p-2'>
          <div className='col'>{image}</div>
          <div className='col'>
            <h4>{label}</h4>
          </div>
          <div className='col'>
            <h6
              className={
                'ml-3 badge ' +
                (healthLabel === 'undefined'
                  ? 'badge-secondary badge-pill'
                  : ' badge-success badge-pill')
              }
            >
              {healthLabel.charAt(0).toUpperCase() + healthLabel.slice(1)}
            </h6>
          </div>
          <div className='col text-right'>
            <button className='btn btn-info btn-sm mr-3'>View</button>
            <button className='btn btn-danger btn-sm' onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div class='col-sm border text-center bg-light text-danger font-weight-bold font-italic b'>
        <h4>You have no saved recipes</h4>
      </div>
    );
  }
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default RecipeItem;

import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import RecipeContext from '../../context/recipe/recipeContext';

const RecipeItem = ({ recipe }) => {
  const recipeContext = useContext(RecipeContext);

  const { deleteRecipe } = recipeContext;

  const { id, label, healthLabel, image } = recipe; //url

  const onDelete = () => {
    deleteRecipe(id);
  };

  if (recipe) {
    return (
      <div className='container-fluid'>
        <div className='row border border-white mb-3 p-2'>
          <div className='col border border-white'>{image}</div>
          <div className='col'>
            <h4 className='text-white'>{label}</h4>
          </div>
          <div className='col'>
            <h6
              className={
                'ml-3 badge ' +
                (healthLabel === 'undefined'
                  ? 'badge-dark badge-pill'
                  : ' badge-success badge-pill')
              }
            >
              {healthLabel.charAt(0).toUpperCase() + healthLabel.slice(1)}
            </h6>
          </div>
          <div className='col text-right'>
            <button className='view-btn btn btn-light btn-sm mr-3'>View</button>
            <button
              className='delete-btn btn btn-dark  btn-sm'
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
};

RecipeItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};
export default RecipeItem;

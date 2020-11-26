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
        <div className='row d-flex  justify-content-between align-items-center border-bottom mb-1 pb-1 '>
          <div className='col-2'>
            <img className='img-fluid rounded' src={image} alt={label}></img>{' '}
          </div>
          <div className='col '>
            <h6 className='text-white text-wrap '>{label}</h6>
          </div>
          <div className='col '>
            <h6
              className={
                'ml-3 badge ' +
                (healthLabel === 'undefined'
                  ? 'badge-dark badge-pill'
                  : ' badge-success badge-pill')
              }
            >
              {healthLabel !== 'undefined'
                ? healthLabel.charAt(0).toUpperCase() + healthLabel.slice(1)
                : 'No-label'}
            </h6>
          </div>
          <div className='col-4 text-right  '>
            <button className='view-btn btn btn-info btn-sm mr-3'>View</button>
            <button
              className='delete-btn btn btn-danger  btn-sm '
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

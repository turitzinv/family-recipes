import React from 'react';
import { useHistory } from 'react-router-dom';

const RecipePreview = ({ title, image, id }) => {

  let history = useHistory();

  function onClick() {
    history.push(`/recipes/${id}`)
  }

  return (
    <div>
      <h2>{title}</h2>
      <img id="recipe-preview-image" src={image} alt={title}/>
      <button onClick={onClick}>View Recipe</button>
    </div>
  )
}

export default RecipePreview
import React from 'react';
import { useHistory } from 'react-router-dom';

const RecipePreview = ({ title, image, id }) => {

  let history = useHistory();

  function onClick() {
    history.push(`/recipes/${id}`)
  }

  return (
    <div class="card">
       {image === null ? (
        null
      ): (
        <img class="card-img-top" src={image} alt={title}/>
      )}
           <div class="card-body">
      <h2 class="card-title">{title}</h2>
      <button class="btn btn-primary" onClick={onClick}>View Recipe</button>
      </div>
    </div>
  )
}

export default RecipePreview
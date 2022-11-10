import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeCard = () => {
  const [recipe, setRecipe] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetch(`/recipes/${id}`)
    .then((resp) => resp.json())
    .then((recipe) => setRecipe(recipe))
  }, [id])

  console.log(recipe)

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img id="recipe-preview-image" src={recipe.image_url} alt={recipe.title}/>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
    </div>
  )
}

export default RecipeCard
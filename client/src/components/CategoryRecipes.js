import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import RecipePreview from './RecipePreview';

const CategoryRecipes = () => {
  const { id } = useParams()
  const [allRecipes, setAllRecipes] = useState([])

  useEffect(() => {
    fetch(`/categories/${id}`)
    .then((resp) => resp.json())
    .then((categoryRecipes) => setAllRecipes(categoryRecipes.recipes))
  },[id]);

  function recipeRender() {
    if (allRecipes instanceof Array) {
      return allRecipes.map((recipe) =>
      <RecipePreview key = {recipe.id} title = {recipe.title} image = {recipe.image_url} />
      )
    } else {
      return null;
    }
  }

  return (
    <div>
      {recipeRender()}
    </div>
  )
}

export default CategoryRecipes
import React, { useState, useEffect} from 'react';
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
      <RecipePreview key = {recipe.id} id = {recipe.id} title = {recipe.title} image = {recipe.image_url} />
      )
    } else {
      return null;
    }
  }

 

  return (
    <div class="row row-cols-1 row-cols-md-3 g-4">
      {recipeRender()}
    </div>
  )
}

export default CategoryRecipes
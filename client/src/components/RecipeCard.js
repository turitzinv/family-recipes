import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CommentCard from './CommentCard';

const RecipeCard = () => {
  const [recipe, setRecipe] = useState({})
  const [comments, setComments] = useState([])
  const { id } = useParams()

  useEffect(() => {
    fetch(`/recipes/${id}`)
    .then((resp) => resp.json())
    .then((recipe) => {
      setRecipe(recipe)
      setComments(recipe.comments)
    })
  }, [id])

console.log(comments)

  function recipeComments() {
    if (comments instanceof Array) {
      return comments.map((comment) =>
      <CommentCard key = {comment.id} description = {comment.description} comment = {comment} />
      )
    } else {
      return null
    }
  }


  return (
    <div>
      <h1>{recipe.title}</h1>
      <img id="recipe-preview-image" src={recipe.image_url} alt={recipe.title}/>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <h3>Comments</h3>
      <table >
        <tbody>{recipeComments()}</tbody>
      </table>
    </div>
  )
}

export default RecipeCard
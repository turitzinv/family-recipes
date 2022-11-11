import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CommentCard from './CommentCard';

const RecipeCard = ({ currentUserId }) => {
  const [recipe, setRecipe] = useState({})
  const [comments, setComments] = useState([])
  const { id } = useParams()

  let history = useHistory()

  useEffect(() => {
    fetch(`/recipes/${id}`)
    .then((resp) => resp.json())
    .then((recipe) => {
      setRecipe(recipe)
      setComments(recipe.comments)
    })
  }, [id])

  function recipeComments() {
    if (comments instanceof Array) {
      return comments.map((comment) =>
      <CommentCard key = {comment.id} description = {comment.description} comment = {comment} currentUserId = {currentUserId}  />
      )
    } else {
      return null
    }
  }

  function backRecipeClick(){
    history.goBack()
  }


  return (
    <div>
      <h1>{recipe.title}</h1>
      <img id="recipe-preview-image" src={recipe.image_url} alt={recipe.title}/>
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <button onClick = {backRecipeClick}>Back to Recipes</button>
      <h3>Comments</h3>
      <table >
        <tbody>{recipeComments()}</tbody>
      </table>
    </div>
  )
}

export default RecipeCard
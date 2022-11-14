import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import CommentCard from './CommentCard';
import AddComment from './AddComment';

const RecipeCard = ({ currentUserId, errorRender, setErrors }) => {
  const [recipe, setRecipe] = useState({})
  const [comments, setComments] = useState([])
  const [commentInput, setCommentInput] = useState([])
  const [users, setUsers] = useState([])
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

  useEffect(() => {
    fetch("/users")
    .then((resp) => resp.json())
    .then((pulledUsers) => setUsers(pulledUsers))
  },[])

  function handleDeleteComment(deletedComment) {
    const updatedComments = comments.filter((comment) => comment.id !== deletedComment.id)
    setComments(updatedComments)
  }

  function recipeComments() {
    if (comments instanceof Array) {
      return comments.map((comment) =>
      <CommentCard 
      key = {comment.id}
      description = {comment.description}
      comment = {comment}
      currentUserId = {currentUserId}
      handleDeleteComment = {handleDeleteComment}
      users = {users} 
      />
      )
    } else {
      return null
    }
  }

  function handleAddingComment(newComment) {
    setComments([...comments, newComment])
  }

  function addCommentClick() {
    setCommentInput(
      <AddComment
      errorRender = {errorRender} 
      setCommentInput = {setCommentInput}
      currentUserId = {currentUserId}
      recipe_id = {recipe.id}
      setErrors = {setErrors}
      handleAddingComment = {handleAddingComment}
      />
    )
  }

  function backRecipeClick(){
    history.goBack()
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      {recipe.image_url === null ? (
        null
      ): (
        <img id="recipe-preview-image" src={recipe.image_url} alt={recipe.title}/>
      )}
      <h3>Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <button onClick = {backRecipeClick}>Back to Recipes</button>
      <h3>Comments</h3>
      { currentUserId === undefined ? (
        null
      ): (
        <>
        <button onClick = {addCommentClick}>Add Comment</button>
        {commentInput}
        </>
      )}
      <table >
        <tbody>{recipeComments()}</tbody>
      </table>
    </div>
  )
}

export default RecipeCard
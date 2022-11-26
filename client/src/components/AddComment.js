import React, { useState } from 'react'
import Error from './Error'

const AddComment = ({ setCommentInput, currentUserId, recipe_id, handleAddingComment }) => {
  const [comment, setComment] = useState({
    description: ""
  })
  const [commentError, setCommentError] = useState([])

  function closeComment() {
    setCommentInput([])
  }

  function addCommentClick() {
    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        description: comment.description,
        user_id: currentUserId,
        recipe_id: recipe_id
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((newComment) => handleAddingComment(newComment))
        setCommentInput("")
      } else {
        resp.json().then((err) => setCommentError(err.errors))
      }
    })
  }

  function handleChange(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    })
  }

  function errorRender() {
    if (commentError instanceof Array) {
      return commentError.map((error) => <Error key = {error} error = {error} />);
    } else {
      return null;
    }
  }

  return (
    <div>
      {errorRender()}
      <textarea id="comment-input" name="description" onChange={handleChange} value={comment.description} placeholder="Add your comment"/>
      <button id="add-comment" class="btn btn-primary" onClick={addCommentClick}>Add</button>
      <button id="close comment" class="btn btn-primary" onClick={closeComment}>Close</button>
    </div>
  )
}

export default AddComment
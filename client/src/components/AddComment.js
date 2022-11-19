import React, { useState } from 'react'

const AddComment = ({ errorRender, setCommentInput, currentUserId, recipe_id, setErrors, handleAddingComment }) => {
  const [comment, setComment] = useState({
    description: ""
  })

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
        resp.json().then((err) => setErrors(err.errors))
      }
    })
  }

  function handleChange(e) {
    setComment({
      ...comment,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {errorRender}
      <textarea name="description" onChange={handleChange} value={comment.description} placeholder="Add your comment"/>
      <button class="btn btn-primary" onClick={addCommentClick}>Add</button>
      <button class="btn btn-primary" onClick={closeComment}>Close</button>
    </div>
  )
}

export default AddComment
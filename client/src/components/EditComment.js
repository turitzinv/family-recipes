import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditComment = () => {
  const [comment, setComment] = useState({
    description: ""
  })
  const [newComment, setNewComment] = useState({
    description: ""
  })

  const { id } = useParams()

  let history = useHistory()

  function handleCommentChange(e) {
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value
    })
  }

  useEffect(() => {
    fetch(`/comments/${id}`)
    .then((resp) => resp.json())
    .then((comment) => setComment(comment))
  }, [id])

  function handleUpdatingComment() {
    fetch(`/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        description: newComment.description
      }),
    })
    .then((resp) => resp.json())
    history.push(`/-recipes/${comment.recipe_id}`)
  }

  function cancelEditClick(){
    history.goBack()
  }

  return (
    <div>
      <textarea id="edit-text-area" name="description" defaultValue={comment.description} onChange={handleCommentChange} />
      <button id="confirm-edit-comment" class="btn btn-primary" onClick={handleUpdatingComment}> Confirm Edit </button>
      <button id="cancel-edit-comment" class="btn btn-primary" onClick={cancelEditClick}> Cancel Edit </button>
    </div>
  )
}

export default EditComment
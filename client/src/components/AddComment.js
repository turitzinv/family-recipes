import React, { useState } from 'react'

const AddComment = ({ errorRender, setCommentInput }) => {
  const [comment, setComment] = useState({
    description: ""
  })


  function closeComment() {
    setCommentInput([])
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
      <button>Add</button>
      <button onClick={closeComment}>Close</button>
    </div>
  )
}

export default AddComment
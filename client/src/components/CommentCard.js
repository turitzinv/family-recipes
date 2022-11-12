import React from 'react'

const CommentCard = ({ description, comment, currentUserId, handleDeleteComment }) => {

  function handleDeleteClick() {
    fetch(`/comments/${comment.id}`, {
      method: "DELETE"
    })
    .then(resp => {
      if(resp.ok) {
        handleDeleteComment(comment)
      }
    })
  }

  return (
    <tr>
      <td>{description}</td>
      { comment.user_id === currentUserId ? (
        <>
        <td><button> Edit </button></td>
        <td><button onClick={handleDeleteClick}> Delete </button></td>
        </>
      ): (
        null
      )}
    </tr>
  )
}

export default CommentCard
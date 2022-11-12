import React from 'react';
import { useHistory } from 'react-router-dom';

const CommentCard = ({ description, comment, currentUserId, handleDeleteComment }) => {

  let history = useHistory()

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

  function handleEditClick() {
    history.push(`/comments/${comment.id}`)
  }

  return (
    <tr>
      <td>{description}</td>
      { comment.user_id === currentUserId ? (
        <>
        <td><button onClick={handleEditClick}> Edit </button></td>
        <td><button onClick={handleDeleteClick}> Delete </button></td>
        </>
      ): (
        null
      )}
    </tr>
  )
}

export default CommentCard
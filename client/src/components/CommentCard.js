import React from 'react';
import { useHistory } from 'react-router-dom';

const CommentCard = ({ description, comment, currentUserId, handleDeleteComment, users }) => {

  let history = useHistory()

  let userCommented = [];

    users.forEach((user) => {
    if(user.id === comment.user_id) {
      userCommented.push(user.username)
      }
    })

  const displayUsers = userCommented.map((user) => {
    return <td key={user.indexOf()}>{user}</td>
  })

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
    <tr class="table-info">
      <td>{description}</td>
      {displayUsers}
      { comment.user_id === currentUserId ? (
        <>
        <td><button id="edit-comment-button" class="btn btn-primary" onClick={handleEditClick}> Edit </button></td>
        <td><button id="delete-comment-button" class="btn btn-primary" onClick={handleDeleteClick}> Delete </button></td>
        </>
      ): (
        null
      )}
    </tr>
  )
}

export default CommentCard
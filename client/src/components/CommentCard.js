import React from 'react'

const CommentCard = ({ description, comment, currentUserId }) => {

  return (
    <tr>
      <td>{description}</td>
      { comment.user_id === currentUserId ? (
        <>
        <td><button> Edit </button></td>
        <td><button> Delete </button></td>
        </>
      ): (
        null
      )}
    </tr>
  )
}

export default CommentCard
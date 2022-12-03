import React from 'react'

const Error = ({ error }) => {
  console.log(error)
  return (
    <div id="error">
      <h3>{error}</h3>
    </div>
  )
}

export default Error
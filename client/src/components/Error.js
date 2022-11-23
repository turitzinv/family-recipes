import React from 'react'

// function hideError() {
//   setTimeout(function(){
//     document.getElementById('error').classList.add('hidden');
//   }, 5000)
// }

const Error = ({ error }) => {
  return (
    <div id="error">
      <h3>{error}</h3>
    </div>
  )
}

export default Error
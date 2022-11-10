import React from 'react'

const RecipePreview = ({ title, image }) => {


  return (
    <div>
      <h2>{title}</h2>
      <img id="recipe-preview-image" src={image} alt={title}/>
    </div>
  )
}

export default RecipePreview
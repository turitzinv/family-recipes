import React from 'react';
import { useHistory } from 'react-router-dom';

const CategoryCard = ({ title, category }) => {

  const history = useHistory()

  function onClick() {
    history.push(`/categories/${category.id}`)
  }

  return (
    <div>
      <h1>{title}</h1>
      <button onClick = {onClick}>View Recipes</button>
    </div>
  )
}

export default CategoryCard
import React from 'react';
import { useHistory } from 'react-router-dom';

const CategoryCard = ({ title, category }) => {

  const history = useHistory()

  function onClick() {
    history.push(`/categories/${category.id}`)
  }

  return (
    <div  id="categories">
        <p>{title}</p>
        <button onClick = {onClick}>View Recipes</button>
    </div>
  )
}

export default CategoryCard
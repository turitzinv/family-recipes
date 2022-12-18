import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = ({allCategories}) => {

  const categoryList = allCategories.map((category) => (
    <CategoryCard
    key={category.id}
    title={category.title}
    category={category}
    />
  ))

  return (
    <div id="all_categories">
      {categoryList}
    </div>
  )
}

export default Categories
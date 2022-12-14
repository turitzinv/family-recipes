import React, { useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'

const Categories = ({allCategories}) => {
  // const [allCategories, setAllCategories] = useState([])

  // useEffect(() => {
  //   fetch("/categories")
  //   .then((resp) => resp.json())
  //   .then((categories) => setAllCategories(categories))
  // }, [])

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
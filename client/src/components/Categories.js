import React, { useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    fetch("/categories")
    .then((resp) => resp.json())
    .then((categories) => setAllCategories(categories))
  }, [])

  const categoryList = allCategories.map((category) => (
    <CategoryCard 
    key={category.id}
    title={category.title}
    />
  ))

  console.log(allCategories, "allCategories")

  return (
    <div>
      {categoryList}
    </div>
  )
}

export default Categories
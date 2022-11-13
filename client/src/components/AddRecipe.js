import React, { useState } from 'react'

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category_id: ""
  })

  console.log(formData.category_id)

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <h2>Create your Recipe</h2>
      <form>
        <input 
        text="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        />
        <input 
        text="text"
        name="ingredients"
        placeholder="Ingredients"
        onChange={handleChange}
        />
        <input 
        text="text"
        name="instructions"
        placeholder="Instructions"
        onChange={handleChange}
        />
        <select onChange={handleChange} name="category_id" defaultValue="default">
          <option value="default" disabled>Choose an option</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Dessert</option>
        </select>
      </form>
    </div>
  )
}

export default AddRecipe
import React, { useState } from 'react'

const AddRecipe = ({ errorRender, setErrors }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category_id: "Choose Category"
  })

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSelectChange(e) {
    setFormData ({
      ...formData,
      [e.target.name]: parseInt(e.target.value)
    })
  }

  function handleRecipeSubmit(e) {
    e.preventDefault()
    fetch("/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: formData.title,
        ingredients: formData.ingredients,
        instructions: formData.instructions,
        category_id: formData.category_id
      }),
    }).then((resp => {
      if (resp.ok) {
        setFormData({
          title: "",
          ingredients: "",
          instructions: "",
          category_id: "Choose Category"
        })
      } else {
        resp.json().then((err) => setErrors(err.errors))
      }
    }))
  }

  return (
    <div>
      <h2>Create your Recipe</h2>
      <form onSubmit={handleRecipeSubmit}>
        <input 
        text="text"
        name="title"
        placeholder="Title"
        onChange={handleInputChange}
        />
        <input 
        text="text"
        name="ingredients"
        placeholder="Ingredients"
        onChange={handleInputChange}
        />
        <input 
        text="text"
        name="instructions"
        placeholder="Instructions"
        onChange={handleInputChange}
        />
        <select onChange={handleSelectChange} name="category_id" defaultValue="default">
          <option value="default" disabled>Choose Category</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Dessert</option>
        </select>
        <button> Add Recipe</button>
        {errorRender}
      </form>
    </div>
  )
}

export default AddRecipe
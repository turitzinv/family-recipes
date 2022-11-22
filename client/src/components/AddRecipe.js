import React, { useState } from 'react'

const AddRecipe = ({ errorRender, setErrors }) => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    image_url: null,
    category_id: "default"
  })

  function handleInputChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSelectChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: parseInt(event.target.value)
    })
  }

  function fileSelectedHandler(event) {
    setFormData({
      ...formData,
      [event.target.name]: URL.createObjectURL(event.target.files[0])

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
        image_url: formData.image_url,
        category_id: formData.category_id
      }),
    }).then((resp => {
      if (resp.ok) {
        alert("Recipe Added!")
        window.location.reload()
        // setFormData({
        //   title: "",
        //   ingredients: "",
        //   instructions: "",
        //   image_url: null,
        //   category_id: "default"
        // })
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
        <input 
        type="file"
        name="image_url"
        placeholder="Image Link"
        onChange={fileSelectedHandler}
        />
        <select onChange={handleSelectChange} name="category_id" defaultValue="default">
          <option value="default" disabled>Choose Category</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Dessert</option>
        </select>
        <button class="btn btn-primary"> Add Recipe</button>
        {errorRender}
      </form>
    </div>
  )
}

export default AddRecipe
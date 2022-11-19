import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const EditRecipe = () => {
  const [recipe, setRecipe] = useState({})
  const [newRecipe, setNewRecipe] = useState({
    title: recipe.title,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    //image_url: null,
    category_id: recipe.category_id
  })

  console.log(recipe)

  const { id } = useParams()

  let history = useHistory()

  function cancelEditClick() {
    history.push(`/recipes/${id}`)
  }

  function handleInputChange(event) {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: event.target.value
    })
  }

  function handleSelectChange(event) {
    setNewRecipe({
      ...newRecipe,
      [event.target.name]: parseInt(event.target.value)
    })
  }

  // function fileSelectedHandler(event) {
  //   setNewRecipe({
  //     ...newRecipe,
  //     [event.target.name]: URL.createObjectURL(event.target.files[0])

  //   })
  // }

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((resp) => resp.json())
      .then((recipe) => setRecipe(recipe))
  }, [id])

  function handleRecipeUpdateSubmit(e) {
    e.preventDefault()
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: newRecipe.title,
        ingredients: newRecipe.ingredients,
        instructions: newRecipe.instructions,
        category_id: newRecipe.category_id
      }),
    }).then((resp) => resp.json())
    history.push(`/recipes/${id}`)
  }

  return (
    <div>
      <form onSubmit={handleRecipeUpdateSubmit}>
        <input 
        text="text"
        name="title"
        placeholder="Title"
        defaultValue={recipe.title}
        onChange={handleInputChange}
        />
        <input 
        text="text"
        name="ingredients"
        placeholder="Ingredients"
        defaultValue={recipe.ingredients}
        onChange={handleInputChange}
        />
        <input 
        text="text"
        name="instructions"
        placeholder="Instructions"
        defaultValue={recipe.instructions}
        onChange={handleInputChange}
        />
        {/* <input 
        type="file"
        name="image_url"
        placeholder="Image Link"
        value={recipe.image_url}
        onChange={fileSelectedHandler}
        /> */}
        <select onChange={handleSelectChange} name="category_id" value={recipe.category_id}>
          <option value="default" disabled>Choose Category</option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Dessert</option>
        </select>
        <button class="btn btn-primary">Confirm Edit</button>
        <button class="btn btn-primary" onClick={cancelEditClick}>Cancel Edit</button>
      </form>
    </div>
  )
}

export default EditRecipe
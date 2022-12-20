import React, { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router-dom';

const EditRecipe = ({ errorRender, setErrors }) => {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();

  let history = useHistory();

  function cancelEditClick() {
    history.push(`/-recipes/${id}`);
  }

  function handleInputChange(event) {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
    });
  }

  function handleSelectChange(event) {
    setRecipe({
      ...recipe,
      [event.target.name]: parseInt(event.target.value),
    });
  }

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((resp) => resp.json())
      .then((recipe) => setRecipe(recipe));
  }, [id]);

  // function handleRecipeUpdateSubmit(e) {
  //   e.preventDefault();

  //   const sendFormData = new FormData();
  //   sendFormData.append("title", recipe.title);
  //   sendFormData.append("ingredients", recipe.ingredients);
  //   sendFormData.append("instructions", recipe.instructions);
  //   sendFormData.append("category_id", recipe.category_id);

  //   fetch(`/recipes/${id}`, {
  //     method: "PATCH",
  //     body: sendFormData,
  //   }).then((resp => {
  //     if (resp.ok) {
  //       history.push(`/recipes/${id}`);
  //     } else {
  //       resp.json().then((err) => setErrors(err.errors));
  //     }
  //   }));
  // }

  function handleRecipeUpdateSubmit(e) {
    e.preventDefault();
    fetch(`/recipes/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: recipe.title,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions,
        category_id: recipe.category_id
      }),
    }).then((resp => {
      if (resp.ok) {
        history.push(`/-recipes/${id}`);
        window.location.reload()
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    }));
  }

  return (
    <div id="edit-recipe-fixed">
      <form onSubmit={handleRecipeUpdateSubmit} className="recipe-form">
        <h3 className="recipe-form-h3">Title</h3>
        <input className="form-control" id="exampleFormControlInput1"
          text="text"
          name="title"
          placeholder="Title"
          defaultValue={recipe.title}
          onChange={handleInputChange}
        />
        <h3 className="recipe-form-h3">Ingredients</h3>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
          text="text"
          name="ingredients"
          placeholder="Ingredients"
          defaultValue={recipe.ingredients}
          onChange={handleInputChange}
        />
        <div/>
        <h3 className="recipe-form-h3">Instructions</h3>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"
          text="text"
          name="instructions"
          placeholder="Instructions"
          defaultValue={recipe.instructions}
          onChange={handleInputChange}
        />
        <h3 className="recipe-form-h3">Select a Category</h3>
        <select 
          className="form-select form-select-lg mb-3"
          onChange={handleSelectChange}
          name="category_id"
          defaultValue="default"
          value={recipe.category_id}
        >
          <option value="default" disabled>
            Choose Category
          </option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Dessert</option>
        </select>
        <button id="confirm-edit-button" className="btn btn-primary">Confirm Edit</button>
        <button id="cancel-edit-button" className="btn btn-primary" onClick={cancelEditClick}>
          Cancel Edit
        </button>
      </form>
      {errorRender}
    </div>
  );
};

export default EditRecipe;

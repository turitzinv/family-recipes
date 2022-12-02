import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

const EditRecipe = ({ errorRender, setErrors }) => {
  const [recipe, setRecipe] = useState({}); //set default value to empty strings
  // const [newRecipe, setNewRecipe] = useState({
  //   title: recipe.title,
  //   ingredients: recipe.ingredients,
  //   instructions: recipe.instructions,
  //   image_url: recipe.image_url,
  //   category_id: recipe.category_id
  // })

  const { id } = useParams();

  let history = useHistory();

  function cancelEditClick() {
    history.push(`/recipes/${id}`);
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

  // let categoryArray = ["Breakfast", "Lunch", "Dinner", "Dessert"]

  // const categoryList = categoryArray.map((category,index) => {
  //  <option key={index}>{category}</option>
  //   console.log(index, "this is index")
  // })

  function fileSelectedHandler(event) {
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.files[0],
    });
  }

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((resp) => resp.json())
      .then((recipe) => setRecipe(recipe));
  }, [id]);



  function handleRecipeUpdateSubmit(e) {
    e.preventDefault();

    const sendFormData = new FormData();
    sendFormData.append("title", recipe.title);
    sendFormData.append("ingredients", recipe.ingredients);
    sendFormData.append("instructions", recipe.instructions);
    sendFormData.append("image_url", recipe.image_url);
    sendFormData.append("category_id", recipe.category_id);

    fetch(`/recipes/${id}`, {
      method: "PATCH",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: sendFormData,
      // JSON.stringify({
      //   title: newRecipe.title,
      //   ingredients: newRecipe.ingredients,
      //   instructions: newRecipe.instructions,
      //   category_id: newRecipe.category_id
      // }),
    }).then((resp => {
      if (resp.ok) {
        history.push(`/recipes/${id}`);
      } else {
        resp.json().then((err) => setErrors(err.errors));
      }
    }));
  }

  return (
    <div>
      <form onSubmit={handleRecipeUpdateSubmit} id="edit-form">
        <h3 className="edit-h3">Title</h3>
        <input class="form-control" id="exampleFormControlInput1"
          text="text"
          name="title"
          placeholder="Title"
          defaultValue={recipe.title}
          onChange={handleInputChange}
        />
        <h3 className="edit-h3">Ingredients</h3>
        <div class="mb-3"></div>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"
          text="text"
          name="ingredients"
          placeholder="Ingredients"
          defaultValue={recipe.ingredients}
          onChange={handleInputChange}
        />
        <div/>
        <h3 className="edit-h3">Instructions</h3>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"
          text="text"
          name="instructions"
          placeholder="Instructions"
          defaultValue={recipe.instructions}
          onChange={handleInputChange}
        />
        <h3 className="edit-h3">Choose a Photo </h3>
        <input class="form-control" id="formFile"
          className="input-group mb-3"
          type="file"
          name="image_url"
          placeholder="Image Link"
          // value={recipe.image_url}
          accept="image/*"
          onChange={fileSelectedHandler}
        />
        <h3>Select a Category</h3>
        <select
          onChange={handleSelectChange}
          name="category_id"
          defaultValue="default"
        >
          <option value="default" disabled>
            Choose Category
          </option>
          <option value="1">Breakfast</option>
          <option value="2">Lunch</option>
          <option value="3">Dinner</option>
          <option value="4">Dessert</option>
        </select>
        <button className="btn btn-primary">Confirm Edit</button>
        <button className="btn btn-primary" onClick={cancelEditClick}>
          Cancel Edit
        </button>
      </form>
      {errorRender}
    </div>
  );
};

export default EditRecipe;

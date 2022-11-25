import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipePreview from "./RecipePreview";
import { useSelector } from "react-redux";
import usersReducer from "./redux/usersReducer";

const CategoryRecipes = ({ /*user*/}) => {
  const { id } = useParams();
  const [allRecipes, setAllRecipes] = useState([]);
  const user = useSelector(state => state.users.user.user)

  useEffect(() => {
    fetch(`/categories/${id}`)
      .then((resp) => resp.json())
      .then((categoryRecipes) => setAllRecipes(categoryRecipes.recipes));
  }, [id]);

  function recipeRender() {
    if (allRecipes instanceof Array) {
      return allRecipes.map((recipe) => (
        <RecipePreview
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image_url}
          // user={user}
        />
      ));
    } else {
      return null;
    }
  }

  return (
    <div>
      {user ? null : (
        <h3>Log in or Create an account to view Recipe details</h3>
      )}
      <div class="row row-cols-1 row-cols-md-3 g-4">
        {recipeRender()}
      </div>
    </div>
  );
};

export default CategoryRecipes;

import React from "react";
import { useParams } from "react-router-dom";
import RecipePreview from "./RecipePreview";
import { useSelector } from "react-redux";

const CategoryRecipes = () => {
  const { id } = useParams();
  const user = useSelector((state) => state.users);
  const recipes = useSelector((state => state.recipes))

  const categoryRecipes = Array.isArray(recipes) ? recipes.filter((recipe) => {
     return recipe.category_id === parseInt(id)
    }
  ) : []; 

  function recipeRender() {
    if (categoryRecipes instanceof Array) {
      return categoryRecipes.map((recipe) => (
        <RecipePreview
          key={recipe.id}
          id={recipe.id}
          title={recipe.title}
          image={recipe.image_url}
        />
      ));
    } else {
      return null;
    }
  }

  return (
    <div>
      {user.isLoggedIn ? null : (
        <h3 id="login-to-view-recipe-h3">Log in or Create an account to view Recipe details</h3>
      )}
      <div id="recipe-previews" className="row row-cols-1 row-cols-md-3 g-4">{recipeRender()}</div>
    </div>
  );
};

export default CategoryRecipes;

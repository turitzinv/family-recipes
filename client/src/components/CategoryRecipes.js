import React from "react";
import { useParams } from "react-router-dom";
import RecipePreview from "./RecipePreview";
import { useSelector } from "react-redux";

const CategoryRecipes = (/*user*/) => {
  const { id } = useParams();
  //const [allRecipes, setAllRecipes] = useState([]);
  const user = useSelector((state) => state.users);
  const recipes = useSelector((state => state.recipes))

  const categoryRecipes = recipes.filter((recipe) => {
     return recipe.category_id === parseInt(id)
    }
  );  

  //refreshing the page gives error...TypeError: recipes.forEach is not a function
    //const categoryRecipes = []
//   recipes.forEach((recipe) => {
//     console.log(recipe.category_id)
//     if (recipe.category_id === parseInt(id)) {
//       return categoryRecipes.push(recipe)
//     }
//    }
//  );

  //Old useEffect before Redux
  // useEffect(() => {
  //   fetch(`/categories/${id}`)
  //     .then((resp) => resp.json())
  //     .then((categoryRecipes) => setAllRecipes(categoryRecipes.recipes));
  // }, [id]);

  function recipeRender() {
    if (categoryRecipes instanceof Array) {
      return categoryRecipes.map((recipe) => (
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
      {user.isLoggedIn ? null : (
        <h3>Log in or Create an account to view Recipe details</h3>
      )}
      <div className="row row-cols-1 row-cols-md-3 g-4">{recipeRender()}</div>
    </div>
  );
};

export default CategoryRecipes;

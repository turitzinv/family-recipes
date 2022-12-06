import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { useSelector } from "react-redux";

const RecipeCard = () => {
  const [recipe, setRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState([]);
  const [users, setUsers] = useState([]);

  const { id } = useParams();

  let history = useHistory();

  // const allRecipes = useSelector(state => state.recipes)
  // const recipe = allRecipes.filter((recipe) => {
  //   return recipe.id === parseInt(id)
  // })
  const currentUser = useSelector((state) => state.users);
  const currentUserId = currentUser.user.id;

  // console.log(id, "this is id")
  // console.log(recipe, "this is recipe")
  // console.log(recipe[0].id, "this is recipe[0].id")
  //console.log(testRecipe, "this is testRecipe")

  useEffect(() => {
    fetch(`/recipes/${id}`)
      .then((resp) => resp.json())
      .then((recipe) => {
        setRecipe(recipe);
        setComments(recipe.comments);
      });
  }, [id]);

  useEffect(() => {
    fetch("/users")
      .then((resp) => resp.json())
      .then((pulledUsers) => setUsers(pulledUsers));
  }, []);

  // const loading = async () => {
  //   await loadUsers()
  // }

  // const loadUsers = async () => {
  //   const resp = await fetch("/users")
  //   const data = await resp.json()
  //   setUsers(data)
  // }

  function handleDeleteComment(deletedComment) {
    const updatedComments = comments.filter(
      (comment) => comment.id !== deletedComment.id
    );
    setComments(updatedComments);
  }

  function recipeComments() {
    if (comments instanceof Array) {
      return comments.map((comment) => (
        <CommentCard
          key={comment.id}
          description={comment.description}
          comment={comment}
          currentUserId={currentUserId}
          handleDeleteComment={handleDeleteComment}
          users={users}
        />
      ));
    } else {
      return null;
    }
  }

  function handleAddingComment(newComment) {
    setComments([...comments, newComment]);
  }

  function handleEditRecipeClick() {
    history.push(`/editrecipe/${recipe.id}`);
  }

  function addCommentClick() {
    setCommentInput(
      <AddComment
        setCommentInput={setCommentInput}
        currentUserId={currentUserId}
        recipe_id={recipe.id}
        handleAddingComment={handleAddingComment}
      />
    );
  }

  function handleDeleteClick() {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE",
    }).then((resp) => {
      if (resp.ok) {
        history.push("/categories");
      }
    });
  }

  function backRecipeClick() {
    history.push(`/categories/${recipe.category_id}`);
  }

  return (
    <div id="recipe-card">
      <h1 className="recipe-card-headers">{recipe.title}</h1>
      <img id="recipe-image" src={recipe.image_url} alt={recipe.title} />
      {recipe.author_id === currentUserId ? (
        <>
          <button
            id="edit-recipe-button"
            className="btn btn-primary"
            onClick={handleEditRecipeClick}
          >
            Edit Recipe
          </button>
          <button
            id="delete-recipe-button"
            className="btn btn-primary"
            onClick={handleDeleteClick}
          >
            Delete Recipe
          </button>
        </>
      ) : null}
      <h3 className="recipe-card-headers" id="ingredients-h3">Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3 className="recipe-card-headers">Instructions</h3>
      <p>{recipe.instructions}</p>
      <button className="btn btn-primary" onClick={backRecipeClick}>
        Back to Recipes
      </button>
      <h3 className="recipe-card-headers" id="comments-h3">Comments</h3>
      {currentUserId === undefined ? null : (
        <>
          <button className="btn btn-primary" onClick={addCommentClick}>
            Add Comment
          </button>
          {commentInput}
        </>
      )}
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="recipe-comment-headers">Recipe Comments</th>
            <th className="recipe-comment-headers">Username</th>
          </tr>
        </thead>
        <tbody>{recipeComments()}</tbody>
      </table>
    </div>
  );
};

export default RecipeCard;

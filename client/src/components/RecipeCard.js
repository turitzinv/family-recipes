import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { useSelector } from "react-redux";

const RecipeCard = ({ /*currentUserId*/ errorRender, setErrors }) => {
  const [recipe, setRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState([]);
  const [users, setUsers] = useState([]);
  
  const { id } = useParams();

  let history = useHistory();

  const currentUserId = useSelector(state => state.users.user.user.id)
  console.log(currentUserId)

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
        errorRender={errorRender}
        setCommentInput={setCommentInput}
        currentUserId={currentUserId}
        recipe_id={recipe.id}
        setErrors={setErrors}
        handleAddingComment={handleAddingComment}
      />
    );
  }

  function handleDeleteClick() {
    fetch(`/recipes/${recipe.id}`, {
      method: "DELETE",
    })
      .then((resp) => {
        if (resp.ok) {
          history.push("/categories");
        }
      })
  }

  function backRecipeClick() {
    history.goBack();
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <img id="recipe-image" src={recipe.image_url} alt={recipe.title} />
      {recipe.author_id === currentUserId ? (
        <>
          <button id="edit-recipe-button" class="btn btn-primary" onClick={handleEditRecipeClick}>
            Edit Recipe
          </button>
          <button id="delete-recipe-button" class="btn btn-primary" onClick={handleDeleteClick}>
            Delete Recipe
          </button>
        </>
      ) : null}
      <h3 id="ingredients-h3">Ingredients</h3>
      <p>{recipe.ingredients}</p>
      <h3>Instructions</h3>
      <p>{recipe.instructions}</p>
      <button class="btn btn-primary" onClick={backRecipeClick}>
        Back to Recipes
      </button>
      <h3 id="comments-h3">Comments</h3>
      {currentUserId === undefined ? null : (
        <>
          <button class="btn btn-primary" onClick={addCommentClick}>
            Add Comment
          </button>
          {commentInput}
        </>
      )}
      <table class="table table-striped">
        <tr>
          <th>Recipe Comments</th>
          <th>Username</th>
        </tr>
        <tbody>{recipeComments()}</tbody>
      </table>
    </div>
  );
};

export default RecipeCard;

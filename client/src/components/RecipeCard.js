import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";
import { useSelector } from "react-redux";
import DeleteConfirmation from "./DeleteConfirmation";

const RecipeCard = () => {
  const [recipe, setRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState([]);
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  let history = useHistory();

  const currentUser = useSelector((state) => state.users);
  const currentUserId = currentUser.user.id

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
    history.push(`/-editrecipe/${recipe.id}`);
  }

  function handleEditRecipePhotoClick() {
    history.push(`/-editrecipephoto/${recipe.id}`);
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
        history.push("/-categories");
        window.location.reload()
      }
    });
  }

  function backRecipeClick() {
    history.push(`/-categories/${recipe.category_id}`);
  }

  return (
    <div id="recipe-card">
      <h1 id="recipe-title" className="recipe-card-headers">{recipe.title}</h1>
      <img id="recipe-image" src={recipe.image_url} alt={recipe.title} />
      {recipe.author_id === currentUserId ? (
        <>
          <button
            id="edit-recipe-button"
            className="btn btn-primary"
            onClick={handleEditRecipeClick}
          >
            Edit Details
          </button>
          <button
            id="edit-photo-button"
            className="btn btn-primary"
            onClick={handleEditRecipePhotoClick}
          >
            Edit Photo
          </button>
            <DeleteConfirmation handleDeleteClick={handleDeleteClick} />
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
          <button className="btn btn-primary" onClick={addCommentClick}>
            Add Comment
          </button>
          {commentInput}
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

import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const RecipePreview = ({ title, image, id, /*user*/ }) => {
  let history = useHistory();
  const user = useSelector(state => state.users.user.user)

  function onClick() {
    history.push(`/recipes/${id}`);
  }

  return (
    <div class="card">
      <img class="card-img-top" src={image} alt={title} />
      <div class="card-body">
        <h2 class="card-title">{title}</h2>
        {user ? (
          <button class="btn btn-primary" onClick={onClick}>
          View Details
        </button>
        ): (
          null
        )}
      </div>
    </div>
  );
};

export default RecipePreview;

import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const RecipePreview = ({ title, image, id }) => {
  let history = useHistory();
  const user = useSelector(state => state.users)

  function onClick() {
    history.push(`/recipes/${id}`);
  }

  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={title} />
      <div className="card-body">
        <h2 id="preview-title" className="card-title">{title}</h2>
        {user.isLoggedIn ? (
          <button className="btn btn-primary" onClick={onClick}>
          View Details
        </button>
        ) : (
          null
        )}
      </div>
    </div>
  );
};

export default RecipePreview;

import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const EditRecipePhoto = ({ errorRender, setErrors }) => {
  const [photo, setPhoto] = useState(null);
  const { id } = useParams();

  let history = useHistory();

  function fileSelectedHandler(event) {
    setPhoto({
      ...photo,
      [event.target.name]: event.target.files[0],
    });
  }

  function cancelEditClick() {
    history.push(`/-recipes/${id}`);
  }

  const sendFormData = new FormData();

  function imageCheck() {
    if (photo === null) {
      return null
    } else {
      sendFormData.append("image_url", photo.image_url);
    }
  }

  function handlePhotoUpdateSubmit(e) {
    e.preventDefault();

    // const sendFormData = new FormData();
    //sendFormData.append("image_url", photo.image_url);
    imageCheck()

    fetch(`/recipes/${id}`, {
      method: "PATCH",
      body: sendFormData,
    }).then((resp => {
      if (resp.ok) {
        history.push(`/-recipes/${id}`);
        window.location.reload()
      } else {
        resp.json().then((err) => console.log(err.errors));
      }
    }));
  }

  return (
    <div>
      <form id="edit-recipe-fixed" onSubmit={handlePhotoUpdateSubmit}>
      <h3 className="recipe-form-h3">Choose a New Photo </h3>
        <input 
          id="formFile"
          className="form-control"
          type="file"
          name="image_url"
          accept="image/*"
          onChange={fileSelectedHandler}
        />
        <button id="confirm-edit-button" className="btn btn-primary">Confirm Edit</button>
        <button id="cancel-edit-button" className="btn btn-primary" onClick={cancelEditClick}>
          Cancel Edit
        </button>
      </form>
      {errorRender}
    </div>
  )
}

export default EditRecipePhoto
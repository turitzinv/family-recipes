export const allRecipes = () => {
  return async (dispatch) => {
    const resp = await fetch("/recipes", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await resp.json();
    if (data) {
      dispatch({ type: "GETRECIPES", payload: data });
    }
  };
};

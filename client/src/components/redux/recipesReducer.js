const initialState = {};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GETRECIPES":
      return action.payload;
    default:
      return state;
  }
};

export default recipesReducer;

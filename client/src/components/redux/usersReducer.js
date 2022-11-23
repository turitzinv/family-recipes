const initialState = {
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload.user;

    case "LOGOUT":
      return initialState

    default:
      return state;
  }
};
export default usersReducer;

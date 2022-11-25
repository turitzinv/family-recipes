const initialState = {
  user: {}, //originally null
  username: "",
  password: ""
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { 
        user: action.payload,
        username: action.payload.username,
        password: action.payload.password
      }

    case "LOGOUT":
      return initialState

    default:
      return state;
  }
};
export default usersReducer;

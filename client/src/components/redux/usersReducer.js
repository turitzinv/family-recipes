const initialState = {
  user: {}, //originally null
  username: "",
  password: "",
  password_confirmation: "",
  isLoggedIn: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { 
        user: action.payload,
        username: action.payload.username,
        password: action.payload.password,
        isLoggedIn: true
      }

    case "SIGNUP":
      return {
        user: action.payload,
        username: action.payload.username,
        password: action.payload.password,
        password_confirmation: action.payload.password_confirmation,
        isLoggedIn: true
      }

    case "LOGOUT":
      return initialState

    default:
      return state;
  }
};
export default usersReducer;

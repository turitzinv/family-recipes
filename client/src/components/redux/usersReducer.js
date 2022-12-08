const initialState = {
  user: {}, //originally null
  username: "",
  password: "",
  password_confirmation: "",
  isLoggedIn: false
}

const usersReducer = (state = initialState, action) => {
  //console.log(action.payload, "payload")
  //console.log(action.payload.username, "payload.username")
  switch (action.type) {
    case "LOGIN":
      return { 
        user: action.payload.user,
        username: action.payload.username,
        password: action.payload.password,
        isLoggedIn: true
      }

    case "SIGNUP":
      return {
        user: action.payload.user,
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

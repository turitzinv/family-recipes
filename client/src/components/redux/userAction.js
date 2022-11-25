

export const login = (details, history) => {
  return async (dispatch) => {
   // dispatch({ type: "REQUESTING" });

    const resp = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(details),
    });
    
    const data = await resp.json()
    console.log(data, "data inside login")
    const payload = {
      user: data,
      username: data.username,
      password: data.password
    }

    dispatch({ type: "LOGIN", payload });

    //dispatch({ type: "DONE_REQUESTING" });
    //history.push('/')
  };
};

export const currentUser = () => {
  return async dispatch => {
    const resp = await fetch("/me", {
      headers: { 
        "Content-Type": "application/json"
      }
    })
    const data = await resp.json();

    if(data) {
      dispatch({ type: "LOGIN", payload: data })
    }
  }
}

export const logout = () => {
  return async dispatch => {
    const resp = await fetch("/logout", {
          method: "DELETE"
        })
        if (resp.ok) {
          dispatch({type: "LOGOUT"})
        }
    //type: "LOGOUT"
  }
}

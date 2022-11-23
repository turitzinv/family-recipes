export const login = (username, password) => {
  const payload = {
    username,
    password,
  };

  return {
    type: "LOGIN",
    payload
  };
};

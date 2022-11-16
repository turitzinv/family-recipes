import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk("user/fetchUser", () => {
    return fetch("/me")
      .then((resp) => resp.json())
      .then((user) => user)
 })

 const userSlice = createSlice({
  name: "user",
  initialState: {
    entities: null,
    status: "idle"
  },
  reducers: {
    userAdded(state,action) {
      state.entities = action.payload
    }
  }
 })

 export const { userAdded } = userSlice.actions

 export default userSlice.reducer;
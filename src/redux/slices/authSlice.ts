import { createAsyncThunk, createSlice, ActionReducerMapBuilder } from "@reduxjs/toolkit";


const signInuser = createAsyncThunk('auth/login', async(body) => {

        const res = await fetch("https://b2b-dev.skill-lync.com/api/auth/login",{
            method: 'post',
            headers:{
                'Content-Type': "application-json"
            },
            body: JSON.stringify(body)
        })
        return await res.json();
    
})


const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user") || 'null'),
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.user = null;
    localStorage.removeItem("user");
    window.location.href = '/login'
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<any>) => {
        let { pending, fulfilled, rejected } = signInuser;

        builder
        .addCase(pending , (state: any) => {
        state.error = null;
      })
      .addCase(fulfilled, (state, action) => {
        const user = action.payload;
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user;
        // const { from } = history.location.state || { from: { pathname: "/" } };
        // history.navigate(from);
      })
        .addCase(rejected, (state: any, action) => {
        state.error = action.error;
      })
  }
});

export const {  logout } = authSlice.actions;

export const selectUser = (state: any) => state.user.user;

export default authSlice.reducer;
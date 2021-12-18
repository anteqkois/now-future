import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk('users/login', async ({ email, password }, thunkAPI) => {
  const response = await axios.post('/api/v1/auth/login', { email, password });
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    logoutSuccess: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.log('Coś poszło nie tak, nie zalogowano !');
    });
  },
});

export default userSlice.reducer;

//ACTIONS
// Add action when login is pending !

export const { logoutSuccess } = userSlice.actions;

export const logout = () => async (dispatch) => {
  try {
    //Logout with API
    return dispatch(logoutSuccess());
  } catch (error) {}
};

import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk('users/login', async ({ email, password }, thunkAPI) => {
  try {
    const response = await axios.post('/api/v1/auth/login', { email, password });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const logout = createAsyncThunk('users/logout', async (thunkAPI) => {
  try {
    const response = await axios.get('/api/v1/auth/logout');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export const signup = createAsyncThunk('users/signup', async ({ username, email, password }, thunkAPI) => {
  try {
    const response = await axios.post('/api/v1/auth/signup', { username, email, password });
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.error = action.payload.error;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.user = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.error = action.payload.error;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.error = action.payload.error;
    });
  },
});

export default userSlice.reducer;

//ACTIONS
// Add action when login is pending !

// export const { logout } = userSlice.actions;

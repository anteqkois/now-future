import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getAllPosts = createAsyncThunk('posts/', async (thunkAPI) => {
  try {
    const response = await axios.get('/api/v1/posts');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: null,
    error: null,
  },
  reducers: {
    search: (state) => {
      // state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.fulfilled, (state, action) => {
      console.log(action.payload)
      state.posts = action.payload;
    });
    builder.addCase(getAllPosts.rejected, (state, action) => {
      state.error = action.payload.error;
    });
  },
});

export default postsSlice.reducer;

//ACTIONS
// Add action when login is pending !

// export const { logout } = userSlice.actions;

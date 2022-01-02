import posts from '../providers/api/posts.js';
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/', async (thunkAPI) => {
    try {
        const response = await posts.getAll();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const putComment = createAsyncThunk('postsAddComments/', async ({ id, body }, thunkAPI) => {
    try {
        const response = await posts.addComment(id, body);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

// export const getPost = createAsyncThunk('posts/:id', async ({ id }, thunkAPI) => {
//     try {
//         const response = await posts.get(`/api/v1/posts/${id}`);
//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.response.data);
//     }
// });

const postsAdapter = createEntityAdapter({
    selectId: (post) => post._id,
});

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: postsAdapter.getInitialState([]),
        error: null,
    },
    // reducers: {
    //     search: (state) => {
    //         // state.user = null;
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            postsAdapter.setAll(state.posts, action.payload);
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.payload.error;
        });
        builder.addCase(putComment.fulfilled, (state, action) => {
            postsAdapter.updateOne(state.posts, {
                id: action.payload[0]._id,
                changes: action.payload[0],
            });
            state.error = null;
        });
        builder.addCase(putComment.rejected, (state, action) => {
            console.log(action.payload.error);
            state.error = action.payload.error.content;
        });
        // builder.addCase(getPost.fulfilled, (state, action) => {
        //     // console.log(action.payload);
        //     state.posts = action.payload;
        // });
        // builder.addCase(getPost.rejected, (state, action) => {
        //     state.error = action.payload.error;
        // });
    },
});

export const postsSelectors = postsAdapter.getSelectors((state) => state.posts.posts);

export default postsSlice.reducer;

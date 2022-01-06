import posts from '../providers/api/posts.js';
import comments from '../providers/api/comments.js';
import { createAsyncThunk, createEntityAdapter, createSlice } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/', async (thunkAPI) => {
    try {
        const response = await posts.getAll();
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const postComment = createAsyncThunk(
    'postsAddComments/',
    async ({ id, userId, content }, thunkAPI) => {
        try {
            const response = await posts.addComment(id, { userId, content });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const updateComment = createAsyncThunk(
    'updateAddComments/',
    async ({ idComment, content }, thunkAPI) => {
        try {
            const response = await comments.update(idComment, { content });
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const removeComment = createAsyncThunk(
    'postsRemoveComments/',
    async ({ idPost, idComment }, thunkAPI) => {
        try {
            const response = await posts.removeComment(idPost, idComment);
            return { data: response.data, idPost, idComment };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    },
);

export const postStar = createAsyncThunk('postsAddStars/', async ({ idPost, idUser }, thunkAPI) => {
    try {
        const response = await posts.addStar(idPost, { idUser });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const removeStar = createAsyncThunk('postsRemoveStars/', async ({ idPost, idUser }, thunkAPI) => {
    try {
        const response = await posts.removeStar(idPost, idUser);
        return { data: response.data, idPost, idUser };
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
    reducers: {
        // search: (state) => {
        //     // state.user = null;
        // },
        resetError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            postsAdapter.setAll(state.posts, action.payload);
        });
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.error = action.payload.error;
        });
        builder.addCase(postComment.fulfilled, (state, action) => {
            postsAdapter.updateOne(state.posts, {
                id: action.payload[0]._id,
                changes: action.payload[0],
            });
            state.error = null;
        });
        builder.addCase(postComment.rejected, (state, action) => {
            state.error = action.payload.error.content
                ? action.payload.error.content
                : 'Coś poszło nie tak, nie udało się dodać komentarza';
        });
        builder.addCase(updateComment.fulfilled, (state, action) => {
            postsAdapter.updateOne(state.posts, {
                id: action.payload._id,
                changes: action.payload,
            });
            state.error = null;
        });
        builder.addCase(updateComment.rejected, (state, action) => {
            state.error = action.payload.error.content
                ? action.payload.error.content
                : 'Coś poszło nie tak, nie udało się zaktualizować komentarza';
        });
        builder.addCase(removeComment.fulfilled, (state, action) => {
            const post = postsAdapter.getSelectors().selectById(state.posts, action.payload.idPost);

            postsAdapter.updateOne(state.posts, {
                id: action.payload.idPost,
                changes: {
                    ...post,
                    comments: post.comments.filter((comment) => comment._id !== action.payload.idComment),
                },
            });
            state.error = null;
        });
        builder.addCase(removeComment.rejected, (state, action) => {
            state.error = action.payload ? action.payloa : 'Nie udało się usunąć komentarza';
        });
        builder.addCase(postStar.fulfilled, (state, action) => {
            postsAdapter.updateOne(state.posts, {
                id: action.payload._id,
                changes: action.payload,
            });
            state.error = null;
        });
        builder.addCase(postStar.rejected, (state, action) => {
            state.error = action.payload.error.content
                ? action.payload.error.content
                : 'Coś poszło nie tak, nie udało się dodać gwiazdki';
        });
        builder.addCase(removeStar.fulfilled, (state, action) => {
            const post = postsAdapter.getSelectors().selectById(state.posts, action.payload.idPost);

            postsAdapter.updateOne(state.posts, {
                id: action.payload.idPost,
                changes: {
                    ...post,
                    stars: post.stars.filter((star) => star._id !== action.payload.idUser),
                },
            });
            state.error = null;
        });
        builder.addCase(removeStar.rejected, (state, action) => {
            state.error = action.payload ? action.payloa : 'Nie udało się usunąć komentarza';
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

export const { resetError } = postsSlice.actions;

export const postsSelectors = postsAdapter.getSelectors((state) => state.posts.posts);

export default postsSlice.reducer;

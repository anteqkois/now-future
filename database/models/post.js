import mongoose from 'mongoose';
import { userSchema } from './user.js';
import { commentSchema } from './comment.js';
import { categorySchema } from './category.js';

const Post = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    contentPost: {
        type: String,
        required: true,
    },
    category: [categorySchema],
    star: [userSchema],
    comments: [commentSchema],
    // star: {
    //   type: [mongoose.Schema.Types.ObjectId],
    //   ref: 'User',
    // },
});

export default mongoose.model('Post', Post);

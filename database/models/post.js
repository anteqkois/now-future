import mongoose from 'mongoose';
import { userSchema } from './user.js';
import { commentSchema } from './comment.js';
import { categorySchema } from './category.js';

//ADD MIDLEWARE TO ADD STARS, COMMENTS ETC.

const Post = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        categories: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Category',
            },
        ],
        stars: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        comments: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
        // category: [categorySchema],
        // star: [userSchema],
        // comments: [commentSchema],
        // star: {
        //   type: [mongoose.Schema.Types.ObjectId],
        //   ref: 'User',
        // },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Post', Post);

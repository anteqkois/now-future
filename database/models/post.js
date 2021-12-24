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
            required: [true, 'Brak autora postu'],
        },
        title: {
            type: String,
            required: [true, 'Brak tytułu postu'],
            minLength: [6, 'Minimalna długość tytułu to 6 znaków'],
        },
        content: {
            type: String,
            required: [true, 'Brak treści postu'],
            minLength: [20, 'Minimalna długość treści to 20 znaków'],
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
    },
    {
        timestamps: true,
    },
);

Post.query.byCategory = (category) => {
    return this.where({ categories: category });
};

export default mongoose.model('Post', Post);

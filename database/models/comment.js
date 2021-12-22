import mongoose from 'mongoose';

export const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    date: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
    },
    content: {
        type: String,
    },
});

export default mongoose.model('Comment', commentSchema);

import mongoose from 'mongoose';
//ADD MIDLEWARE TO ADD STARS ETC.
export const commentSchema = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        },
        content: {
            type: String,
            required: [true, 'Brak treści komentarza'],
            minLength: [20, 'Minimalna długość treści to 20 znaków'],
        },
        stars: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Comment', commentSchema);

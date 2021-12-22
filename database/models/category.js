import mongoose from 'mongoose';

//ADD Category controller and try use it and relation

export const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
});

export default mongoose.model('Category', categorySchema);

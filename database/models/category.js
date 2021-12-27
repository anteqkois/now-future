import mongoose from 'mongoose';

export const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Nazwa jest wymagana'],
            minlength: [3, 'Nazwa kategorii musi zawierać co najmniej 3 snaki'],
            unique: [true, 'Nazwa musi być unikalna'],
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model('Category', categorySchema);

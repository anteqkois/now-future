import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  nick: {
    type: String,
  },
});

export default mongoose.model('Comment', commentSchema);

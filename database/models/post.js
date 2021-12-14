import mongoose from 'mongoose';
import { userSchema } from './user.js';

const Post = mongoose.Schema({
  title: {
    type: String,
  },
  nick: {
    type: String,
  },
  date: {
    type: Date,
  },
  category: {
    type: String,
  },
  contentPost: {
    type: String,
  },
  star: [userSchema],
  // star: {
  //   type: [mongoose.Schema.Types.ObjectId],
  //   ref: 'User',
  // },
});

export default mongoose.model('Post', Post);

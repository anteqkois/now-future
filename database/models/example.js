import mongoose from 'mongoose';
// import URLSlugs from 'mongoose-url-slugs';

const Example = mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 60,
  },
});

// Project.plugin(URLSlugs('title', { field: 'slug' }));

export default mongoose.model('Example', Example);

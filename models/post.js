//MODEL
const { Schema, model, mongoose } = require('mongoose');

// const postSchema = new Schema({
//   postId: { type: mongoose.SchemaTypes.ObjectId,required: true, index: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  summary: { type: String, required: true },
  // subreddit: { type: String, required: true }
});

module.exports = model('Post', postSchema);
import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  userImage: {
    type: String,
    required: true
  },
  likes: [{
    type: String  // 存储点赞用户的 ID
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Comment || mongoose.model('Comment', CommentSchema); 
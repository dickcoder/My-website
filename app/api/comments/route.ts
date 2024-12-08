import { NextResponse } from 'next/server';
import { auth, currentUser } from '@clerk/nextjs/server';
import dbConnect from '@/lib/dbConnect';
import Comment from '@/models/Comment';
import mongoose from 'mongoose';

interface CommentWithReplies extends mongoose.Document {
  _id: string;
  content: string;
  userId: string;
  userName: string;
  userImage: string;
  likes: string[];
  createdAt: Date;
  parentId?: string;
  replies: CommentWithReplies[];
}

const commentMap = new Map<string, CommentWithReplies>();
const rootComments: CommentWithReplies[] = [];

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    const user = await currentUser();
    if (!userId) {
      return NextResponse.json({ error: '未登录' }, { status: 401 });
    }

    await dbConnect();
    const { content } = await req.json();

    const comment = await Comment.create({
      content,
      userId,
      userName: user?.firstName || user?.username || '用户',  // 使用真实用户名
      userImage: user?.imageUrl || 'https://api.dicebear.com/7.x/avatars/svg',  // 使用真实头像
      likes: [],
      createdAt: new Date()
    });

    return NextResponse.json(comment);
  } catch (error) {
    console.error('创建评论失败:', error);
    return NextResponse.json({ error: '评论失败' }, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const skip = (page - 1) * limit;

  try {
    await dbConnect();
    
    const [comments, total] = await Promise.all([
      Comment.find()
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      Comment.countDocuments()
    ]);

    const hasMore = total > skip + comments.length;

    return NextResponse.json({
      comments,
      hasMore,
      total
    });
  } catch (error) {
    return NextResponse.json(
      { error: '获取评论失败' },
      { status: 500 }
    );
  }
} 
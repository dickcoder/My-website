import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import dbConnect from '@/lib/dbConnect';
import Comment from '@/models/Comment';

export async function POST(
  req: Request,
  { params }: { params: { commentId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: '未登录' }, { status: 401 });
    }

    await dbConnect();
    const comment = await Comment.findById(params.commentId);
    
    if (!comment) {
      return NextResponse.json({ error: '评论不存在' }, { status: 404 });
    }

    const likeIndex = comment.likes.indexOf(userId);
    if (likeIndex === -1) {
      comment.likes.push(userId);
    } else {
      comment.likes.splice(likeIndex, 1);
    }
    
    await comment.save();
    return NextResponse.json(comment);
  } catch (error) {
    return NextResponse.json({ error: '操作失败' }, { status: 500 });
  }
} 
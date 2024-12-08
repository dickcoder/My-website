import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import dbConnect from '@/lib/dbConnect';
import Comment from '@/models/Comment';

export async function DELETE(
  req: Request,
  { params }: { params: { commentId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: '未登录' }, { status: 401 });
    }

    await dbConnect();
    const comment = await Comment.findByIdAndDelete(params.commentId);
    
    if (!comment) {
      return NextResponse.json({ error: '评论不存在' }, { status: 404 });
    }

    return NextResponse.json({ message: '删除成功' });
  } catch (error) {
    return NextResponse.json({ error: '删除失败' }, { status: 500 });
  }
} 
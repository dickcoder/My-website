'use client'

/**
 * 评论页面组件
 * 包含评论列表、评论输入、分页加载、删除确认等功能
 */

// 导入必要的依赖
import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Heart, Trash2, ArrowUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// 定义评论数据接口
interface Comment {
  _id: string;
  content: string;
  userId: string;
  userName: string;
  userImage: string;
  likes: string[];
  createdAt: string;
}

export default function CommentsPage() {
  // 状态管理
  const { user, isSignedIn } = useUser();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [commentToDelete, setCommentToDelete] = useState<string | null>(null);
  
  // 用于检测滚动到底部的观察器
  const { ref, inView } = useInView();

  // 添加管理员权限检查
  const isAdmin = user?.publicMetadata?.role === 'admin';

  /**
   * 获取评论数据
   * @param pageNum 页码
   */
  const fetchComments = async (pageNum: number) => {
    try {
      setIsLoading(true);
      const res = await fetch(`/api/comments?page=${pageNum}&limit=10`);
      const data = await res.json();
      
      // 根据页码决定是替换还是追加数据
      if (pageNum === 1) {
        setComments(data.comments);
      } else {
        setComments(prev => [...prev, ...data.comments]);
      }
      
      setHasMore(data.hasMore);
    } catch (error) {
      console.error('获取评论失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // 初始加载评论
  useEffect(() => {
    fetchComments(1);
  }, []);

  // 监听滚动到底部，加载更多评论
  useEffect(() => {
    if (inView && !isLoading && hasMore) {
      setPage(prev => prev + 1);
      fetchComments(page + 1);
    }
  }, [inView, isLoading, hasMore]);

  /**
   * 处理评论提交
   * @param e 表单事件
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSignedIn || !newComment.trim()) return;

    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: newComment }),
      });

      if (res.ok) {
        setNewComment('');
        fetchComments(1);
      }
    } catch (error) {
      console.error('发表评论失败:', error);
    }
  };

  /**
   * 处理点赞操作
   * @param commentId 评论ID
   */
  const handleLike = async (commentId: string) => {
    try {
      const res = await fetch(`/api/comments/${commentId}/like`, {
        method: 'POST',
      });
      if (res.ok) {
        fetchComments(1);
      }
    } catch (error) {
      console.error('点赞失败:', error);
    }
  };

  /**
   * 处理删除按钮点击
   * @param commentId 要删除的评论ID
   */
  const handleDeleteClick = (commentId: string) => {
    setCommentToDelete(commentId);
  };

  /**
   * 确认删除评论
   */
  const handleConfirmDelete = async () => {
    if (!commentToDelete) return;

    try {
      const res = await fetch(`/api/comments/${commentToDelete}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchComments(1);
      }
    } catch (error) {
      console.error('删除失败:', error);
    } finally {
      setCommentToDelete(null);
    }
  };

  /**
   * 滚动到页面顶部
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    // 页面容器
    <div className="min-h-screen bg-black text-white relative">
      {/* 主要内容区域 - 使用网格布局 */}
      <div className="max-w-7xl mx-auto min-h-screen mt-60 flex gap-6">
        {/* 左侧广告位 - 仅在大屏幕显示 */}
        <div className="hidden lg:block w-64">
          <div className="sticky top-1/3">
            <div className="border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-gray-500 mb-2">广告位招租</div>
              <div className="aspect-[3/4] bg-gray-900/50 rounded flex items-center justify-center">
                <span className="text-gray-600">联系站长</span>
              </div>
            </div>
          </div>
        </div>

        {/* 中间主要内容区域 */}
        <div className="flex-1 max-w-4xl">
          {/* 固定在顶部的标题栏 */}
          <div className="sticky top-0 z-10 backdrop-blur-xl bg-black/70 border-b border-gray-800">
            <div className="px-6 py-4">
              <h1 className="text-2xl font-bold">Comments</h1>
            </div>
          </div>

          {/* 评论输入区域 - 根据登录状态显示不同内容 */}
          {isSignedIn ? (
            <div className="border-b border-gray-800 p-6">
              <form onSubmit={handleSubmit}>
                <div className="flex gap-4">
                  {/* 用户头像 */}
                  <img
                    src={user?.imageUrl}
                    alt={user?.username || '用户头像'}
                    className="w-12 h-12 rounded-full"
                  />
                  {/* 评论输入框 */}
                  <div className="flex-1">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault();
                          handleSubmit(e);
                        }
                      }}
                      className="w-full bg-transparent border-none focus:ring-0 resize-none text-white placeholder-gray-500 text-lg"
                      placeholder="发布你的评论..."
                      rows={3}
                    />
                    {/* 发布按钮 */}
                    <div className="flex justify-end mt-3">
                      <button
                        type="submit"
                        disabled={!newComment.trim()}
                        className="px-6 py-2 bg-blue-500 text-white rounded-full font-bold text-base
                               hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        发布
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          ) : (
            // 未登录提示
            <div className="p-6 text-center border-b border-gray-800">
              <p className="text-gray-500 text-lg">Login to comment</p>
            </div>
          )}

          {/* 评论列表区域 */}
          <div>
            {comments.map((comment) => (
              <div 
                key={comment._id} 
                className="p-6 border-b border-gray-800 hover:bg-gray-900/50 transition"
              >
                <div className="flex gap-4">
                  {/* 评论者头像 */}
                  <img
                    src={comment.userImage}
                    alt={comment.userName}
                    className="w-12 h-12 rounded-full"
                  />
                  {/* 评论内容区域 */}
                  <div className="flex-1 min-w-0">
                    {/* 评论头部：用户名、时间和删除按钮 */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-base hover:underline">
                          {comment.userName}
                        </span>
                        <span className="text-gray-500 text-base">·</span>
                        <span className="text-gray-500 text-base">
                          {formatDistanceToNow(new Date(comment.createdAt), {
                            locale: zhCN,
                            addSuffix: true,
                          })}
                        </span>
                      </div>
                      {/* 删除按钮 - 对评论作者和管理员显示 */}
                      {(user?.id === comment.userId || isAdmin) && (
                        <button
                          onClick={() => handleDeleteClick(comment._id)}
                          className="flex items-center gap-2 text-gray-500 group hover:text-red-600"
                        >
                          <Trash2 
                            size={20} 
                            className="group-hover:bg-red-600/10 rounded-full p-2 box-content" 
                          />
                        </button>
                      )}
                    </div>
                    {/* 评论正文 */}
                    <p className="text-base mt-2 whitespace-pre-wrap break-words">
                      {comment.content}
                    </p>
                    {/* 评论互动区域 */}
                    <div className="flex items-center mt-4">
                      {/* 点赞按钮 */}
                      <button
                        onClick={() => handleLike(comment._id)}
                        className={`flex items-center gap-2 group ${
                          comment.likes.includes(user?.id || '')
                            ? 'text-pink-600'
                            : 'text-gray-500 hover:text-pink-600'
                        }`}
                      >
                        <Heart 
                          size={20} 
                          className={`group-hover:bg-pink-600/10 rounded-full p-2 box-content
                                    ${comment.likes.includes(user?.id || '') ? 'fill-current' : ''}`}
                        />
                        <span className="text-base">
                          {comment.likes.length > 0 && comment.likes.length}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {hasMore && (
              <div
                ref={ref}
                className="flex justify-center p-8"
              >
                {isLoading && (
                  <div className="animate-spin rounded-full h-8 w-8 border-4 border-gray-800 border-t-blue-500" />
                )}
              </div>
            )}
            
            {!hasMore && comments.length > 0 && (
              <div className="p-8 text-center text-gray-500">
                没有更多评论了
              </div>
            )}
          </div>
        </div>

        {/* 右侧广告位 - 仅在大屏幕显示 */}
        <div className="hidden lg:block w-64">
          <div className="sticky top-1/3">
            <div className="border border-gray-800 rounded-lg p-4 text-center">
              <div className="text-gray-500 mb-2">广告位招租</div>
              <div className="aspect-[3/4] bg-gray-900/50 rounded flex items-center justify-center">
                <span className="text-gray-600">联系站长</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-1/3 p-3 bg-gray-800/80 hover:bg-gray-700 
                 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200
                 text-white/80 hover:text-white"
        aria-label="回到顶部"
      >
        <ArrowUp size={64} />
      </button>

      {commentToDelete && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-xl max-w-sm w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">确认删除</h3>
            <p className="text-gray-300 mb-6">确定要删除这条评论吗？此操作无法撤销。</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setCommentToDelete(null)}
                className="px-4 py-2 text-gray-400 hover:text-white transition"
              >
                取消
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
              >
                删除
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


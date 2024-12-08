'use client'

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { formatDistanceToNow } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { Heart, Trash2 } from 'lucide-react';

interface Comment {
  _id: string;
  content: string;
  userId: string;
  userName: string;
  userImage: string;
  likes: string[];
  createdAt: string;
}

export default function Comments() {
  const { user, isSignedIn } = useUser();
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    const res = await fetch('/api/comments');
    const data = await res.json();
    setComments(data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const res = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: newComment }),
    });

    if (res.ok) {
      setNewComment('');
      fetchComments();
    }
  };

  const handleLike = async (commentId: string) => {
    const res = await fetch(`/api/comments/${commentId}/like`, {
      method: 'POST',
    });
    if (res.ok) {
      fetchComments();
    }
  };

  const handleDelete = async (commentId: string) => {
    const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      fetchComments();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {isSignedIn && (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500"
            placeholder="写下你的评论..."
            rows={3}
          />
          <button
            type="submit"
            className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            发表评论
          </button>
        </form>
      )}

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment._id} className="rounded-lg p-6 shadow-sm">
            <div className="flex items-start space-x-4">
              <img
                src={comment.userImage}
                alt={comment.userName}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold">{comment.userName}</h4>
                  <span className="text-sm text-gray-500">
                    {formatDistanceToNow(new Date(comment.createdAt), {
                      locale: zhCN,
                      addSuffix: true,
                    })}
                  </span>
                </div>
                <p className="mt-2 text-gray-700">{comment.content}</p>
                <div className="mt-4 flex items-center space-x-4">
                  <button
                    onClick={() => handleLike(comment._id)}
                    className={`flex items-center space-x-1 ${
                      comment.likes.includes(user?.id || '') ? 'text-red-500' : 'text-gray-500'
                    }`}
                  >
                    <Heart size={20} />
                    <span>{comment.likes.length}</span>
                  </button>
                  {user?.id === comment.userId && (
                    <button
                      onClick={() => handleDelete(comment._id)}
                      className="text-gray-500 hover:text-red-500"
                    >
                      <Trash2 size={20} />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 
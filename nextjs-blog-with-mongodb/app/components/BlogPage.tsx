"use client";

import { useCallback, useEffect, useState } from "react";
import PostForm from "./PostForm";
import PostList from "./PostList";

interface Post {
  _id: string;
  title: string;
  author: string;
  description: string;
}

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [showForm, setShowForm] = useState(false);

  const fetchPosts = useCallback(async () => {
    const res = await fetch("/api/posts");
    const data = await res.json();
    setPosts(data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  function handleEdit(post: Post) {
    setEditingPost(post);
    setShowForm(true);
  }

  async function handleDelete(id: string) {
    if (!confirm("Bu postu silmek istediğinize emin misiniz?")) return;

    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    fetchPosts();
  }

  function handleSaved() {
    setEditingPost(null);
    setShowForm(false);
    fetchPosts();
  }

  function handleCancel() {
    setEditingPost(null);
    setShowForm(false);
  }

  return (
    <>
      {showForm ? (
        <PostForm
          key={editingPost?._id ?? "new"}
          editingPost={editingPost}
          onCancel={handleCancel}
          onSaved={handleSaved}
        />
      ) : (
        <button
          onClick={() => setShowForm(true)}
          className="mb-8 rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
        >
          + Yeni Post
        </button>
      )}

      <PostList posts={posts} onEdit={handleEdit} onDelete={handleDelete} />
    </>
  );
}

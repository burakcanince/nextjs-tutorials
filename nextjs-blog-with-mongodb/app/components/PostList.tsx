"use client";

interface Post {
  _id: string;
  title: string;
  author: string;
  description: string;
}

interface PostListProps {
  posts: Post[];
  onEdit: (post: Post) => void;
  onDelete: (id: string) => void;
}

export default function PostList({ posts, onEdit, onDelete }: PostListProps) {
  if (posts.length === 0) {
    return <p className="text-zinc-500">Henüz post yok.</p>;
  }

  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <div
          key={post._id}
          className="rounded-lg border border-zinc-200 bg-white p-5"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-semibold text-black">
                {post.title}
              </h2>
              <p className="mt-1 mb-3 text-sm text-zinc-500">{post.author}</p>
              <p className="text-zinc-700">{post.description}</p>
            </div>

            <div className="flex shrink-0 gap-2">
              <button
                onClick={() => onEdit(post)}
                className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-700 hover:bg-zinc-50"
              >
                Düzenle
              </button>
              <button
                onClick={() => onDelete(post._id)}
                className="rounded-md border border-red-200 bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100"
              >
                Sil
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

import BlogPage from "./components/BlogPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 p-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-8 text-3xl font-bold text-center">Blog Posts</h1>
        <BlogPage />
      </div>
    </div>
  );
}

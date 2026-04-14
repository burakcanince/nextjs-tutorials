export default async function BlogSlug({ params } : { params: Promise<{ slug: string[] }> }) {
    const { slug } = await params;
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-semibold text-3xl">
          URL: {slug ? slug.join('/') : 'blog'}
        </h1>
      </div>
    );
}

export default async function ProductItem ({ params }: { params: Promise<{ productId: string }> }) {
    const { productId } = await params;
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl">Product ID: {productId}</p>
        </div>
    )
}

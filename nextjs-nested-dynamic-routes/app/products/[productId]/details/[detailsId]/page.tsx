export default async function ProductDetail ({ params }: { params: Promise<{ detailsId: string }> }) {
    const { detailsId } = await params;
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl">Product Details ID: {detailsId}</p>
        </div>
    )
}

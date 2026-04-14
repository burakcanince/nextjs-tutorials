import { notFound } from "next/navigation";

export default async function Products ({ params }: { params: Promise<{ productId: number }> }) {
    const { productId } = await params;

    if (productId > 5) {
        return notFound();
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl">Product ID: {productId}</p>
        </div>
    )
}

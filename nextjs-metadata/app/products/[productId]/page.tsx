import { Metadata } from "next";

type Props = {
    params: { productId: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { productId } = await params;
    return {
        title: `Product ${productId}`,
        description: `Description for Product ${productId}`,
    }
}

export default async function Products ({ params }: Props) {
    const { productId } = await params;
    return (
        <div className="min-h-screen flex items-center justify-center">
            <p className="text-2xl">Product ID: {productId}</p>
        </div>
    )
}

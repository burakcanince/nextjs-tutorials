import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Description for Blog Page",
}

export default function Blog() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-semibold text-3xl">
          Blog
        </h1>
      </div>
    );
}

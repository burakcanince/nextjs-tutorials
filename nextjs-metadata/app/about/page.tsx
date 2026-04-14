import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About",
    description: "Description for About Page",
}

export default function About() {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="font-semibold text-3xl">
          About
        </h1>
      </div>
    );
}

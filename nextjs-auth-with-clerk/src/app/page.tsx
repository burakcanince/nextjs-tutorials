import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <main className="max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="font-bold text-5xl mb-8">
          Authentication with Clerk and Next.js
        </h1>

        <SignedOut>
          <p className="font-bold text-md">
            Please login or sign up to continue
          </p>
        </SignedOut>

        <SignedIn>
          <div className="bg-white rounded-2xl border border-gray-200 p-8">
            <h2 className="font-semibold text-xl mb-4">
              Successfully logged in! 🎉
            </h2>
            <Link
              href="/dashboard"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full font-semibold"
            >
              Go to Dashboard
            </Link>
          </div>
        </SignedIn>
      </main>
    </div>
  );
}

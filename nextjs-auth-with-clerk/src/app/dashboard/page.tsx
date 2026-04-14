import { auth, currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/');
  }

  const user = await currentUser();

  return (
    <div className="py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center shrink-0 text-white text-2xl font-bold">
              {user?.firstName?.charAt(0) || user?.emailAddresses[0]?.emailAddress.charAt(0) || '?'}
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                Welcome, {user?.firstName || 'User'}! 👋
              </h1>
              <p className="text-gray-600">
                {user?.emailAddresses[0]?.emailAddress}
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              {user?.firstName && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Name</p>
                  <p className="font-semibold text-gray-800">
                    {user?.firstName}
                  </p>
                </div>
              )}

              {user?.lastName && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Last Name</p>
                  <p className="font-semibold text-gray-800">
                    {user?.lastName}
                  </p>
                </div>
              )}

              {user?.createdAt && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Registration Date</p>
                  <p className="font-semibold text-gray-800">
                    {new Date(user.createdAt).toLocaleDateString('tr-TR')}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/"
            className="inline-block bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

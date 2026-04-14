export default function DashboardLayout({
    children,
    settings,
    analytics,
}: {
    children: React.ReactNode
    analytics: React.ReactNode
    settings: React.ReactNode
}) {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                {children}
                {settings}
                {analytics}
            </div>
        </>
    )
}

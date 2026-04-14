export default function AboutLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <div>About Top Section</div>
            {children}
            <div>About Bottom Section</div>
        </div>
    )
}

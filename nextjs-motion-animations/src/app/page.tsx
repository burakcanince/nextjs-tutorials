import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans flex items-center justify-center text-center min-h-screen">
       <div className="flex flex-col gap-4">
          <Link href="/animation1">Animation 1</Link>
          <Link href="/animation2">Animation 2</Link>
          <Link href="/animation3">Animation 3</Link>
          <Link href="/animation4">Animation 4</Link>
          <Link href="/animation5">Animation 5</Link>
       </div>
    </div>
  );
}

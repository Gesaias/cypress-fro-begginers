import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center md:p-24 p-2">
      <h1>Home</h1>
      <Link href="/about">About</Link>
    </main>
  );
}

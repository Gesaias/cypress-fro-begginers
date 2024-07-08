import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center md:p-24 p-2">
      <h1>About</h1>
      <Link href="/">Home</Link>
    </main>
  );
}

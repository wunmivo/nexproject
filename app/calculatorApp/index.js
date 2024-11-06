import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Calculator App</h1>
      <Link href="/calculator">
        <a>Go to Calculator</a>
      </Link>
    </div>
  );
}

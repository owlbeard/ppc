import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="space-x-4">
      <Link
        className="p-2 text-2xl bg-blue-400 hover:bg-blue-500 transition-transform rounded-full"
        href="/posts"
      >
        Posts
      </Link>
      <Link
        className="p-2 text-2xl bg-blue-400 hover:bg-blue-500 transition-transform rounded-full"
        href="/users"
      >
        Users
      </Link>
    </nav>
  );
}

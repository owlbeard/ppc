import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="space-x-4">
      <Link href="/posts">Posts</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
}

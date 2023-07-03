import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="container p-4 mx-auto flex justify-between items-center fixed top-0 z-50 bg-slate-600">
      <div className="flex flex-col">
        <Link href="/">
          <h1 className="sm:text-6xl text-4xl">PPC</h1>
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

import Link from 'next/link';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="container mx-auto flex justify-between items-center">
      <div className="flex flex-col">
        <Link href="/">
          <h1 className="sm:text-6xl text-4xl">PPC</h1>
          <p className="sm:text-4xl text-2xl">
            Possibility, Positivity, Community
          </p>
        </Link>
      </div>
      <Navbar />
    </header>
  );
}

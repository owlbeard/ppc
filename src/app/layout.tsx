import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PPC',
  description: 'Possibility, Positivity, Community',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-600 text-white`}>
        <div className="container mx-auto h-screen flex flex-col">
          <Header />
          <main className="py-20 flex-grow flex flex-col justify-center items-center p-2">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

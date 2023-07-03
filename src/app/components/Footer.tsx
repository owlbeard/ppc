import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="container mx-auto flex justify-center items-center gap-2 fixed bottom-0 z-50 bg-slate-600">
      <Image src="/github.svg" width={48} height={48} alt="GitHub Logo"></Image>
      <p>©Copyright 2023 || Ömer F. Altun</p>
    </footer>
  );
}

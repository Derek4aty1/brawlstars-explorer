import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-[64px] bg-black">
      <nav className="flex w-full">
        <Link href="/" draggable={false} className="m-3 flex transition-transform hover:scale-110 active:scale-95">
          <Image
            src="/images/brawlstars-logo-wings.png"
            alt="Brawlstars logo with wings"
            width={50}
            height={50}
            draggable={false}
            className="h-[auto] w-[50px] select-none object-contain"
          />
        </Link>
        <a
          href="https://github.com/Derek4aty1/brawlstars-explorer"
          target="_blank"
          draggable={false}
          className="m-3 ml-auto flex items-center transition-transform hover:scale-110 active:scale-95"
        >
          <Image src="/images/github-logo-white.svg" alt="Github logo" width={30} height={30} draggable={false} className="select-none" />
        </a>
      </nav>
    </header>
  );
}

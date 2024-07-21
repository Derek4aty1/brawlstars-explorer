import Image from "next/image";

export default function Header() {
  return (
    <header className="z-50 sticky top-0 bg-black h-[64px] flex">
      <nav className="flex w-full">
        <a href="/" className="m-3 flex transition duration-200 hover:scale-110 w-auto">
          <Image src="/images/brawlstars-logo.png" alt="Brawlstars logo" width={50} height={50} />
        </a>
        <a href="https://github.com/Derek4aty1/" target="_blank" className="m-3 ml-auto flex items-center transition duration-200 hover:scale-110">
          <Image src="/images/github-logo-white.svg" alt="Github logo" width={30} height={30} />
        </a>
      </nav>
    </header>
  );
}

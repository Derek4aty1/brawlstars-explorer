import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-50 sticky top-0 bg-black h-[64px] flex">
      <nav className="flex w-full">
        <Link href="/" draggable={false} className="m-3 flex w-auto transition duration-200 hover:scale-110 active:scale-95">
          <Image
            src="/images/brawlstars-logo-wings.png"
            alt="Brawlstars logo with wings"
            width={50}
            height={50}
            draggable={false}
            style={{ objectFit: "contain" }}
            className="select-none"
          />
        </Link>
        <a href="https://github.com/Derek4aty1/brawlstars-explorer" target="_blank" draggable={false} className="m-3 ml-auto flex items-center transition duration-200 hover:scale-110 active:scale-95">
          <Image
            src="/images/github-logo-white.svg"
            alt="Github logo"
            width={30}
            height={30}
            draggable={false}
            className="select-none"
          />
        </a>
      </nav>
    </header>
  );
}

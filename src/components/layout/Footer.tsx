export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-center justify-center gap-4 px-8 pb-4 text-center text-sm">
      <hr className="border-white border-t-2 w-full" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }} />
      <p>2024 Brawlstars Explorer - This material is unofficial and is not endorsed by Supercell. For more information see Supercell&apos;s Fan Content Policy:
        <a href="https://supercell.com/en/fan-content-policy/" target="_blank"> https://supercell.com/en/fan-content-policy/.</a>
      </p>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="flex flex-col flex-wrap items-center justify-center gap-4 px-8 pb-4">
      <hr className="w-full border-t-2 border-white" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }} />
      <p>
        Developed by Derek Huber 2024
        <br />
        Brawlstars Explorer is unofficial and is not endorsed by Supercell. For more information see Supercell&apos;s Fan Content Policy:
        <span>
          <a href="https://supercell.com/en/fan-content-policy/" target="_blank">
            {' '}
            https://supercell.com/en/fan-content-policy/.
          </a>
        </span>
      </p>
    </footer>
  );
}

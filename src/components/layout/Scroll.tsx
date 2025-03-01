'use client';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// When a sticky header is present, clicking a link does not automatically scroll the page to the top.
// The current scroll position remains unchanged when navigating to a new page.
// This useEffect serves as a workaround to adjust that behavior.
export default function Scroll() {
  const pathname = usePathname();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return <></>;
}

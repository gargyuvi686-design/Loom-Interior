import { useEffect, useState } from 'react';

export default function useScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    let ticking = false;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct(max > 0 ? Math.round((window.scrollY / max) * 100) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return pct;
}

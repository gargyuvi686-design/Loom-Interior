import { useRef, useState } from 'react';

const SIZE = 64;

export default function useDraggable(getInitial) {
  const [pos, setPos] = useState(getInitial);
  const drag = useRef(null);
  const moved = useRef(false);

  const onPointerDown = (e) => {
    drag.current = { sx: e.clientX, sy: e.clientY, ox: pos.x, oy: pos.y };
    moved.current = false;
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e) => {
    const d = drag.current;
    if (!d) return;
    const dx = e.clientX - d.sx;
    const dy = e.clientY - d.sy;
    if (Math.abs(dx) + Math.abs(dy) > 4) moved.current = true;
    if (!moved.current) return;
    setPos({
      x: Math.min(Math.max(0, d.ox + dx), window.innerWidth - SIZE),
      y: Math.min(Math.max(0, d.oy + dy), window.innerHeight - SIZE),
    });
  };
  const onPointerUp = () => {
    drag.current = null;
  };
  return { pos, setPos, onPointerDown, onPointerMove, onPointerUp, wasDragged: () => moved.current };
}

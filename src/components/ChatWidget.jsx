import { useState } from 'react';
import { quickReplies } from '../data/content';
import useDraggable from '../hooks/useDraggable';

export default function ChatWidget({ onContinue }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [choice, setChoice] = useState('');
  const { pos, onPointerDown, onPointerMove, onPointerUp, wasDragged } = useDraggable(() => ({
    x: typeof window === 'undefined' ? 0 : window.innerWidth - 88,
    y: typeof window === 'undefined' ? 0 : window.innerHeight - 100,
  }));

  if (hidden) return null;

  const panelLeft = Math.min(pos.x, window.innerWidth - 300);
  const panelTop = pos.y > 340 ? pos.y - 330 : pos.y + 72;

  return (
    <>
      {open && (
        <div className="chat-panel" style={{ left: Math.max(8, panelLeft), top: Math.max(8, panelTop) }} role="dialog" aria-label="Chat with Loom Interiors">
          <div className="chat-head">
            <strong>Loom Interiors</strong>
            <button type="button" aria-label="Close chat" onClick={() => setOpen(false)}>&times;</button>
          </div>
          <div className="chat-body">
            <p className="bubble">Hi! What are you planning?</p>
            <div className="chips">
              {quickReplies.map((q) => (
                <button key={q} type="button" className={`chip ${choice === q ? 'on' : ''}`} onClick={() => setChoice(q)}>
                  {q}
                </button>
              ))}
            </div>
            <button
              type="button"
              className="btn btn-green btn-block"
              onClick={() => {
                onContinue(choice);
                setOpen(false);
              }}
            >
              Continue to Consultation
            </button>
          </div>
        </div>
      )}
      <div className="chat-fab" style={{ left: pos.x, top: pos.y }}>
        <button
          type="button"
          className="chat-icon"
          aria-label="Open chat"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onClick={() => {
            if (!wasDragged()) setOpen((o) => !o);
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.5A8 8 0 1 1 21 12z" />
          </svg>
        </button>
        <button type="button" className="fab-close" aria-label="Hide chat icon" onClick={() => setHidden(true)}>&times;</button>
      </div>
    </>
  );
}

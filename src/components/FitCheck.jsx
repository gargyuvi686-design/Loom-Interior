import { useEffect, useRef, useState } from 'react';
import { styles, fitCheck } from '../data/content';

export default function FitCheck() {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const [live, setLive] = useState(false);
  const [message, setMessage] = useState('');
  const [selected, setSelected] = useState(styles[0]);

  const stopCamera = () => {
    streamRef.current?.getTracks().forEach((t) => t.stop());
    streamRef.current = null;
    setLive(false);
  };

  const openCamera = async () => {
    setMessage('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
      streamRef.current = stream;
      setLive(true);
    } catch {
      setMessage('Camera not available. Allow camera access in your browser, or use the sample preview below.');
    }
  };

  // attach stream after the <video> element is rendered
  useEffect(() => {
    if (live && videoRef.current && streamRef.current) {
      videoRef.current.srcObject = streamRef.current;
      videoRef.current.play().catch(() => {});
    }
  }, [live]);

  // release camera on unmount and when the tab is hidden
  useEffect(() => stopCamera, []);
  useEffect(() => {
    const onHide = () => document.hidden && stopCamera();
    document.addEventListener('visibilitychange', onHide);
    return () => document.removeEventListener('visibilitychange', onHide);
  }, []);

  return (
    <section className="fit" id="fit-check">
      <div className="section-head">
        <p className="eyebrow light">See it in your space</p>
        <h2>Find the look that fits your room</h2>
      </div>
      <div className="preview">
        {live ? (
          <video ref={videoRef} playsInline muted aria-label="Live camera preview" />
        ) : (
          <img src={fitCheck.image} alt="Sample room preview" />
        )}
        <div className="caption">
          <strong>{fitCheck.defaultCaption}</strong>
          <span>{selected.caption}</span>
        </div>
      </div>
      <div className="preview-actions">
        {live ? (
          <button className="btn btn-outline-light" type="button" onClick={stopCamera}>Close Camera</button>
        ) : (
          <button className="btn btn-primary" type="button" onClick={openCamera}>Open Camera</button>
        )}
        <span className="note">Camera stays on your device</span>
      </div>
      {message && <p className="camera-msg" role="status">{message}</p>}
      <div className="style-cards" role="radiogroup" aria-label="Style directions">
        {styles.map((s) => (
          <button
            key={s.id}
            type="button"
            role="radio"
            aria-checked={selected.id === s.id}
            className={`style-card ${selected.id === s.id ? 'selected' : ''}`}
            onClick={() => setSelected(s)}
          >
            <img src={s.thumb} alt="" width="300" height="300" loading="lazy" />
            <span>{s.title}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

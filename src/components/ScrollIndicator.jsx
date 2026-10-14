import useScrollProgress from '../hooks/useScrollProgress';

export default function ScrollIndicator() {
  const pct = useScrollProgress();
  return (
    <aside className="progress" aria-label={`Scrolled ${pct} percent`}>
      <span>{pct}%</span>
      <div className="track"><div className="fill" style={{ height: `${pct}%` }} /></div>
      <small>END</small>
    </aside>
  );
}

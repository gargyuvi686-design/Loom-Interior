import { heroContent as h } from '../data/content';

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <p className="eyebrow">{h.eyebrow}</p>
        <h1>{h.title}</h1>
        <p className="lead">{h.text}</p>
        <div className="btn-row">
          <a className="btn btn-primary" href="#get-started">Request Consultation</a>
          <a className="btn btn-outline" href="#process">View Our Process</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={h.image} alt={h.alt} width="900" height="1000" />
        <span className="counter">01 / {String(h.slides).padStart(2, '0')}</span>
      </div>
    </section>
  );
}

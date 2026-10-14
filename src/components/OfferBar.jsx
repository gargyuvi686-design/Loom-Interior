import { offer } from '../data/content';

export default function OfferBar() {
  return (
    <div className="offer-bar">
      <span>{offer.text}</span>
      <a href="#get-started">{offer.link}</a>
    </div>
  );
}

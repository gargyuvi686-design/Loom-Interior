import hero from '../assets/hero.svg';
import preview from '../assets/preview.svg';
import soft from '../assets/style-soft-mineral.svg';
import coastal from '../assets/style-coastal-ink.svg';
import cedar from '../assets/style-cedar-quiet.svg';
import garden from '../assets/style-garden-room.svg';

export const offer = {
  text: 'Festive offer: get 15% off your first design package',
  link: 'Claim Now',
};

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Ideas', href: '#ideas' },
  { label: 'Fit Check', href: '#fit-check' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
];

export const heroContent = {
  eyebrow: 'Residential & commercial interior design',
  title: 'Design spaces that feel like home.',
  text: 'Loom Interiors plans, styles and builds homes and workplaces around the way you live. Start with a conversation.',
  image: hero,
  alt: 'Classical hall with a chandelier',
  slides: 4,
};

export const styles = [
  { id: 'soft-mineral', title: 'Soft mineral', caption: 'Warm stone + oak', thumb: soft },
  { id: 'coastal-ink', title: 'Coastal ink', caption: 'Deep blue + linen', thumb: coastal },
  { id: 'cedar-quiet', title: 'Cedar quiet', caption: 'Cedar + soft brass', thumb: cedar },
  { id: 'garden-room', title: 'Garden room', caption: 'Sage + natural cane', thumb: garden },
];

export const fitCheck = { image: preview, defaultCaption: 'Your room, your next direction' };

export const quickReplies = ['New Home', 'Renovation', 'Kitchen', 'Bedroom', 'Full Home', 'Commercial'];

export const contact = {
  email: 'hello@loominteriors.example',
  phone: '+91 98765 43210',
  whatsapp: '919876543210',
};

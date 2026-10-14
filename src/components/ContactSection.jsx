import { contact } from '../data/content';
import ConsultForm from './ConsultForm';

export default function ContactSection({ values, setValues }) {
  return (
    <section className="contact" id="get-started">
      <div className="contact-info">
        <p className="eyebrow light">Get started</p>
        <h2>Ready to create a space that feels like you?</h2>
        <p><a href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <p><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></p>
        <a
          className="btn btn-whatsapp"
          href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent('Hi Loom Interiors, I would like a design consultation.')}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Chat on WhatsApp
        </a>
      </div>
      <ConsultForm values={values} setValues={setValues} />
    </section>
  );
}

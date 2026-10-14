import { useState } from 'react';

export const rules = {
  name: (v) => v.trim().length >= 2 || 'Please enter your full name',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter a valid e-mail address',
  phone: (v) => /^(\+91)?[\s-]?[6-9]\d{9}$/.test(v.replace(/\s/g, '')) || 'Enter a valid 10-digit phone number',
  place: (v) => v.trim().length > 0 || 'Please tell us the location / project type',
};

export const validate = (values) =>
  Object.fromEntries(
    Object.entries(rules)
      .map(([k, f]) => [k, f(values[k] ?? '')])
      .filter(([, r]) => r !== true)
  );

const fields = [
  { name: 'name', label: 'Full Name', type: 'text', placeholder: 'e.g. Aanya Sharma', autoComplete: 'name' },
  { name: 'email', label: 'Email Address', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' },
  { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '98765 43210', autoComplete: 'tel' },
  { name: 'place', label: 'Property Location / Project Type', type: 'text', placeholder: 'e.g. 3BHK apartment, Ludhiana' },
];

export default function ConsultForm({ values, setValues }) {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onChange = (e) => {
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      // TODO (future work): POST `values` to a back-end endpoint
      console.log('Consultation request', values);
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="form-card" role="status">
        <h3>Thank you, {values.name.split(' ')[0]}.</h3>
        <p>Your request has been received. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <form className="form-card" onSubmit={onSubmit} noValidate>
      {fields.map((f) => (
        <div className="field" key={f.name}>
          <label htmlFor={f.name}>{f.label}</label>
          <input
            id={f.name}
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            value={values[f.name] ?? ''}
            onChange={onChange}
            aria-invalid={Boolean(errors[f.name])}
            aria-describedby={errors[f.name] ? `${f.name}-err` : undefined}
          />
          {errors[f.name] && <span className="error" id={`${f.name}-err`}>{errors[f.name]}</span>}
        </div>
      ))}
      <button className="btn btn-primary btn-block" type="submit">Request a Design Consultation</button>
      <p className="fineprint">No obligation, no design jargon.</p>
    </form>
  );
}

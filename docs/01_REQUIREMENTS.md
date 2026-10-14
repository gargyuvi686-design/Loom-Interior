# Requirements Specification – Loom Interiors Website

## Purpose
A fast, responsive, attractive website for an interior design studio that makes it easy for visitors to request a design consultation.

## Users
- Visitors: homeowners, builders, businesses (mostly on mobile)
- Studio staff: receive consultation requests

## Functional requirements
| ID | Requirement |
|---|---|
| FR1 | Show a festive offer bar (15% off first design package) with a "Claim Now" link |
| FR2 | Header with logo, six links (Projects, Services, Ideas, Fit Check, Process, About), "Book Consultation" button, user button |
| FR3 | Hero: heading "Design spaces that feel like home.", paragraph, two buttons, image, counter 01 / 04 |
| FR4 | Fixed vertical scroll indicator showing 0–100% and END label |
| FR5 | Movable, closable chat icon; panel with greeting, six quick replies, "Continue to Consultation" |
| FR6 | "Fit Check": open camera, live preview, four style cards that change the caption |
| FR7 | Consultation form: Full Name, Email, Phone, Property Location / Project Type, with validation |
| FR8 | WhatsApp, e-mail and phone contact options |

## Validation rules
| Field | Rule |
|---|---|
| Full Name | required, 2+ characters |
| Email | required, valid pattern |
| Phone | required, 10 digits starting 6–9, optional +91 |
| Location / Project Type | required |

## Non-functional requirements
- Responsive: mobile < 600 px, tablet 600–899 px, desktop 900 px+
- Touch targets at least 44 px
- Smooth scrolling (requestAnimationFrame, passive listener)
- Accessibility: semantic HTML, alt text, aria-labels, visible focus, reduced-motion support
- Camera data never leaves the device; camera only on HTTPS/localhost
- Browsers: Chrome, Edge, Android Chrome, iPhone Safari

## Out of scope (future work)
Back-end, database, notifications, AI chat, AR, user login, automated tests.

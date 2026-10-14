# Test Plan

## Functional tests
| Feature | Test | Expected | Result |
|---|---|---|---|
| Header buttons | Resize 1920 px to 360 px | Inside screen, tappable | |
| Hero | Desktop and mobile | 2 columns / 1 column | |
| Scroll indicator | Scroll top to bottom | 0% to 100%, bar fills | |
| Chat drag | Drag to several spots | Moves, stays on screen | |
| Chat click | Click without dragging | Panel opens; no open after drag | |
| Quick replies | Select each | Highlighted; form field pre-filled after Continue | |
| Camera | Allow / deny | Live view / friendly message | |
| Form | Submit empty and invalid | Errors shown; valid accepted | |

## Compatibility
Chrome and Edge (laptop), Chrome (Android, 360–412 px), Safari (iPhone, 390 px), tablet (768–820 px).

## Sample validation data
- Valid: Aanya Sharma / aanya@example.com / 9876543210 / 3BHK, Ludhiana
- Invalid: "A" / "abc@" / 12345 / empty

## How to test on your phone
Run `npm run dev -- --host`, open the shown network URL on the phone (same Wi-Fi).
Camera needs HTTPS on phones, so use a tunnel (e.g. ngrok) or deploy to Netlify/Vercel for camera testing.

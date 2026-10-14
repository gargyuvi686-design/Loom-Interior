# Design System

## Colour
| Token | Value | Use |
|---|---|---|
| --coral | #ee735a | Call-to-action buttons only |
| --navy | #1c2733 | Text, dark sections |
| --teal | #1b6b8a | Labels, links, chat header |
| --green | #25a35a | WhatsApp / continue button |
| --bg | #fdfcf9 | Page background |
| --bg-soft | #eef1ee | Soft panels |

## Typography
- Headings: Cormorant Garamond (serif), hero size `clamp(2.8rem, 8vw, 6rem)`
- Body and buttons: Inter (sans-serif)
- Small spaced capitalised labels as section eyebrows

## Components
Buttons, cards, inputs and chips share the same radius (2 px), border and hover behaviour.
Primary = filled coral, secondary = outlined, dark = navy.

## UI/UX principles applied
Visual hierarchy, contrast, whitespace, consistency, Fitts's law (large buttons, thumb-reach chat icon), Hick's law (6 links, 6 replies), feedback (hover/focus/progress), progressive disclosure (chat opens on demand).

## Breakpoints (mobile-first, min-width)
600 px and 900 px.

## Wireframe (desktop)
```
[ offer bar ........................................ ]
[ Logo | Projects Services Ideas Fit Process About | Book | (u) ]
[ eyebrow          |                      ]
[ H1 big serif     |   hero image         ]
[ text + 2 buttons |            01 / 04   ]
[ Find the look that fits your room (dark)  ]
[ [ camera preview + caption ]              ]
[ [Open Camera]  Camera stays on your device]
[ card | card | card | card                 ]
[ Contact info + WhatsApp | Consultation form ]
```

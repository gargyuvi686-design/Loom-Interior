# Image Asset Guide (Adobe Photoshop)

You need these images. Source photos should be your own, client-supplied, or licensed / free-to-use (e.g. Unsplash, Pexels).

| File | Size to export | Format | Edits |
|---|---|---|---|
| hero.jpg | about 900 x 1000 px | JPEG / WebP, quality 70–80 | Crop to container ratio, levels and contrast, retouch |
| preview.jpg | about 1200 x 700 px | JPEG / WebP | Crop, warm tone, soft dark gradient at bottom for caption |
| style-soft-mineral.jpg, style-coastal-ink.jpg, style-cedar-quiet.jpg, style-garden-room.jpg | 300 x 300 px each | JPEG | Equal squares, same colour treatment |
| Logo / icons | exact display size | PNG or SVG | Transparent background |

## Workflow
1. Crop and resize to the container size.
2. Adjustment layers: Levels, Curves, Brightness/Contrast, Vibrance for a consistent warm tone.
3. Healing brush / clone stamp to remove blemishes and objects.
4. Add the dark gradient on the preview image.
5. File > Export > Save for Web, RGB colour mode.
6. Put files in `src/assets/` and change the imports at the top of `src/data/content.js`.

Also capture a before / after of the tonal correction for the report (Figure 3.8).

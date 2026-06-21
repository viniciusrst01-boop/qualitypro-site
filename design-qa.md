# Design QA - Hero QualityPro

## Visual truth

- Reference: `V:\Downloads\ChatGPT Image 19 de jun. de 2026, 15_04_08\ChatGPT Image 19 de jun. de 2026, 15_04_08.png`
- Implementation capture: `C:\Users\Administrator\AppData\Local\Temp\qualitypro-hero-validated.png`
- Comparison: `C:\Users\Administrator\AppData\Local\Temp\qualitypro-hero-comparison-final.png`
- Viewport: 1280 x 720, desktop, initial hero state.

## Checks

- Background composition preserves the industrial meeting scene.
- Animated dashboard is smaller, visually behind the people, and does not require foreground cutouts.
- Dashboard content remains readable and its bars animate without moving the surrounding layout.
- Current desktop panel bounds are approximately 349 x 275 px at position
  716 x 92 in a 1280 x 720 viewport.
- The complete action-status list remains inside the compact panel without clipping.
- Hero copy retains strong contrast over the image.
- The hero contains only the `Ver Serviços` action; `Solicitar Consultoria` remains in the header as requested.
- Animated dashboard is disabled below the desktop breakpoint.
- No horizontal overflow was observed in the validated desktop capture.
- At 2560 x 1440, the header, hero copy, animated dashboard, and service cards
  scale together and use the available width without horizontal overflow.
- QHD dashboard bounds are approximately 656 x 496 px at position 1605 x 184.

## Intentional differences

- The dashboard is smaller and farther in the background than the original mockup, following the latest user feedback.
- Person cutouts were removed because they produced visible clipping artifacts.
- The duplicate hero consultation button from the mockup was omitted.

## Result

Passed. No remaining P0, P1, or P2 visual issues were found in the requested hero adjustment.

## Dashboard content update - 21/06/2026

- Reference: `C:\Users\ADMINI~1\AppData\Local\Temp\codex-clipboard-9a6c2a71-36ce-420f-aa41-0da5b878943f.png`
- Implementation capture: `C:\Users\Administrator\AppData\Local\Temp\qualitypro-dashboard-reference-update.png`
- The existing dashboard container dimensions, responsive transforms, and
  position rules were preserved.
- Internal content now follows the reference hierarchy: SGQ summary rings,
  nonconformities, process performance, ISO 9001 requirement compliance,
  action plan, latest occurrences, and key indicators.
- All five chart surfaces render and animate inside the existing panel.
- Measured layout dimensions equal scroll dimensions (`518 x 358` before the
  existing visual transform), so no internal overflow or clipping is present.
- Lint and production build pass.

Final result: passed.

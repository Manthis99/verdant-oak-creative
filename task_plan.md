# Task Plan

## Goal
Make every public route reliable and readable on small mobile screens, including real Safari viewport constraints.

## Audit Matrix
- [x] Inventory every public route and shared layout component
- [x] Check 320px and 390px widths for horizontal overflow and clipped content
- [x] Check fixed navigation, safe areas, and anchor offsets
- [x] Check homepage scroll scenes and cards for viewport-height failures
- [x] Check work, contact, diagnostic, booking, writing, case studies, projects, roommate, and 404 routes
- [x] Verify touch targets, forms, dialogs, focus states, and reduced-motion behavior

## Implementation
- [x] Fix shared navigation and global mobile layout rules
- [x] Replace fragile fixed/minimum heights with content-safe mobile layouts
- [x] Correct page-specific typography, spacing, clipping, and interaction issues
- [x] Re-run the full route matrix after changes
- [x] Verify the production build; publishing remains a separate explicit step

## Chosen Direction
Preserve the site’s editorial, cinematic character while letting mobile pages flow naturally. Fixed-height theatrical compositions should become content-driven stacks on phones rather than scaled-down desktop scenes.

## Performance Optimization

- [x] Inventory initial bundle structure and homepage media.
- [x] Identify missing, oversized, and eagerly loaded assets.
- [x] Create responsive hero and homepage image variants.
- [x] Add route-level code splitting and defer non-critical integrations.
- [x] Lazy-load below-the-fold media and reduce simultaneous image requests.
- [x] Add long-lived caching for generated image and build assets.
- [x] Compare production bundle output and verify representative routes and assets.

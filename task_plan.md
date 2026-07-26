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

## Local Review Pass

- [x] Restore the homepage hero to a solid charcoal-black background.
- [x] Keep every selected-work background mounted before the scroll sequence begins.
- [x] Verify the one-at-a-time reveal at desktop and the existing stacked treatment on mobile.
- [x] Review the optimized version with the user before committing or publishing.

## Mobile Homepage Follow-up

- [x] Replace the stacked phone hero with the same one-at-a-time scroll sequence used on desktop.
- [x] Reserve dedicated mobile space for the problem-card numbers.
- [x] Correct the insight sentence punctuation and inline spacing.
- [x] Verify the revised sequence and reframe section at representative phone widths.
- [x] Verify the production build.

## About Page Draft

### Blueprint

- North star: help visitors understand who Michael is, how he thinks, and why his breadth is useful without slowing down the homepage.
- Source of truth: existing portfolio copy, project data, impact markers, and first-party photography already in the repository.
- Delivery: a simplified homepage guide section plus a new, directly accessible `/about` route linked from the global menu.
- Tone: personal, curious, grounded, first-person, and editorial rather than résumé-like or overly promotional.

### Implementation

- [x] Replace the homepage’s three-part animated essay with a compact introduction.
- [x] Draft an editorial About page with story, principles, human context, proof, and a clear next step.
- [x] Add the About route to route-level code splitting and the global menu.
- [x] Verify desktop and mobile layouts, route behavior, and the production build.

## Audience-Focused About Revision

- [x] Review the first-party experience guide and Working Genius assessment.
- [x] Reframe the hero around the outcome Michael creates for teams.
- [x] Replace generic biography language with concrete cross-functional experience and evidence.
- [x] Translate Wonder and Galvanizing into useful, jargon-free working principles.
- [x] Add clear fit language so visitors can recognize when Michael is useful.
- [x] Recheck mobile and desktop readability and run the production build.

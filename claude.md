# Project Constitution

## Data Schemas

### Booking Option
```json
{
  "id": "remote | in-person",
  "label": "string",
  "eyebrow": "string",
  "description": "string",
  "calendlyUrl": "string",
  "fallbackUrl": "string",
  "durationLabel": "string",
  "locationLabel": "string"
}
```

## Behavioral Rules

- Preserve the existing `/book` route.
- Present both booking types without forcing a second page load.
- Keep email fallback available if Calendly is blocked.
- Maintain the site's existing editorial, restrained visual language.

## Architectural Invariants

- `src/pages/BookingPage.jsx` owns the booking page UI and Calendly embed behavior.
- Calendly's external widget script is loaded once and reused.
- The active booking option must control both the inline widget URL and the fallback external link.
- `src/components/layout/Navbar.jsx` owns the global studio index and primary route definitions.
- The global menu must remain keyboard dismissible, lock background scrolling while open, and indicate the current route.
- Public routes must remain independently loadable through React route-level code splitting.
- The homepage hero image must be a local responsive asset with an eager, high-priority mobile source.
- Below-the-fold photographs must use lazy loading and asynchronous decoding unless they are actively visible.
- `src/pages/AboutPage.jsx` owns the full personal profile, while the homepage introduction remains a concise guide-and-proof summary.
- The `/about` page must stay personal and first-person while connecting Michael's breadth back to how it helps clients.
- About-page authority claims must remain collaborative and concrete; do not turn attributed revenue, team output, or shared campaign outcomes into individual credit.

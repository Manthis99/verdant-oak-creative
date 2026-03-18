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

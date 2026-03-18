# Findings

- The booking page lives at `src/pages/BookingPage.jsx`.
- The current page embeds a single Calendly inline widget for `https://calendly.com/proctom/45`.
- The page already loads Calendly's external widget script and has a graceful fallback state if the iframe does not appear.
- Keeping one page and swapping the active embed is the simplest user experience and avoids route sprawl or popup friction.

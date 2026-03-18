# Task Plan

## Goal
Update the booking experience so visitors can choose between remote and in-person Calendly scheduling from the existing booking page.

## Blueprint
- [x] Locate the live booking page and existing Calendly implementation
- [x] Decide on the least-friction UX for offering two booking modes
- [x] Implement dual-option booking UI and embed switching
- [x] Verify build passes

## Chosen Direction
Keep a single `/book` page and present two options:
- `Remote call`
- `In-person coffee meetup`

The selected option controls the active Calendly inline embed and fallback link.

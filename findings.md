# Findings

- The homepage is assembled in `src/pages/HomePage.jsx` from section components in `src/components/home/`.
- The requested copy maps directly to `Diagnosis`, `Frustration`, `ProblemReframe`, `MichaelIntro`, `ProcessSteps`, and `Capabilities`.
- There was no existing section for "Who is this for?", so the cleanest fit was a new component inserted before the final CTA.
- The user asked to keep the copy mostly verbatim, so edits should stay limited to tiny grammar and punctuation cleanup only.
- The previous global navigation used a centered rounded pill, glass blur, glow, and rounded CTA, which made it resemble common generated-site patterns.
- The global routes visitors need are Home, Selected Work, Personal Projects, and Start Here; secondary routes can remain directly accessible without crowding the primary menu.
- The workshop direction should rely on typography, ruled structure, and useful descriptions rather than decorative interface labels.
- The right-edge vertical tab was too easy to miss; the primary menu control needs to sit in the conventional upper-right sightline even if its visual treatment remains distinctive.
- The projects page needs orientation more than spectacle: visitors should immediately understand that these are self-directed experiments across hardware, software, and physical objects.
- A project list inside the header makes the reference-inspired composition functional rather than decorative.

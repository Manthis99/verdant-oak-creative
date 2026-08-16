# Property Listing SOP

## Goal

Publish a direct-share, image-led personal tour of 419–421 N Spring St that Michael can send to friends who want to see his new home.

## Inputs

- High-resolution property photos, mechanical snapshots, and floor plans supplied in the two local property exports.
- Verified address label: `419–421 N Spring St, Elgin, IL 60120`.
- Confirmed status: Michael lives in Unit 1. Unit 2 is currently occupied and may later rent for `$1,650 / month` if the current tenants leave.

## Output

- Route: `/419-n-spring-st`.
- Local optimized image assets grouped as `exterior`, `unit-1`, `unit-2`, and `technical`, plus one floor plan for each unit.
- Accessible lightbox/gallery navigation, responsive editorial layouts, and a location action.
- Direct first-person copy without sales language, lifestyle promises, or vague emotional claims.

## Logic

1. Preserve the user-requested sequence: exterior first, Unit 1 second, Unit 2 third, and basement/technical material fourth.
2. Use exterior photography for the opening cinematic sequence.
3. Present Unit 1 plainly as Michael's home.
   - Lead the Unit 1 gallery with `unit-1-7.jpg`, followed by `Kitchen-1.jpg`.
4. Present Unit 2 plainly as currently occupied, rough in places, and only a possible future rental for friends.
5. Keep `$1,650 / month` labeled as an expected future rent, never as a currently available offer.
6. Place each supplied floor plan alongside its corresponding unit and label plan dimensions as approximate.
7. Describe the basement and mechanical systems only at the level visible in the supplied photos. Do not infer age, capacity, condition, or operation.
8. Link to the supplied Spectora inspection as the source of technical detail without paraphrasing a report that has not been independently reviewed.
9. Infer only visible, low-risk amenities; omit unverified transactional details.
10. Keep this route out of global navigation and remove unrelated global page chrome when it competes with the listing experience.
11. Scale opened lightbox photographs beyond their intrinsic CSS size so they use up to 90% of the viewport height, while preserving the complete image and leaving room for viewer controls.

## Edge Cases

- If city/state cannot be verified, display only the confirmed street address and use a general map search rather than inventing a locality.
- If a source photo is portrait, preserve the frame in editorial pairings instead of forcing every image into landscape crops.
- If JavaScript motion is unavailable or reduced motion is requested, keep every image and section readable in normal document order.
- Do not initialize entrance `from` animations under reduced motion; global duration suppression can otherwise leave their starting opacity or transform applied.
- Contact-sheet or image-processing helpers must live in a script file; do not embed JavaScript template literals in a shell command.
- Floor-plan measurements come from the supplied CubiCasa images and remain explicitly approximate.

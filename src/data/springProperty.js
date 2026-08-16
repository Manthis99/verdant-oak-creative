const makePhotos = (group, count, portraitIndexes, label) => (
  Array.from({ length: count }, (_, index) => {
    const number = index + 1;
    const stem = `${group}-${String(number).padStart(2, '0')}`;

    return {
      id: stem,
      group,
      label,
      number,
      orientation: portraitIndexes.includes(number) ? 'portrait' : 'landscape',
      src: `/images/spring-property/${stem}-1600.webp`,
      thumb: `/images/spring-property/${stem}-840.webp`,
      alt: `${label} at 419–421 N Spring Street, photograph ${number} of ${count}`,
    };
  })
);

const makeFloorPlan = (unit, area) => ({
  id: `floor-plan-${unit}`,
  group: 'floor plan',
  label: `${unit === 'unit1' ? 'Unit 1' : 'Unit 2'} floor plan`,
  orientation: 'landscape',
  src: `/images/spring-property/floor-plan-${unit}-1600.webp`,
  thumb: `/images/spring-property/floor-plan-${unit}-840.webp`,
  alt: `${unit === 'unit1' ? 'Unit 1' : 'Unit 2'} floor plan showing approximately ${area} square feet`,
});

export const property = {
  name: 'The Spring Street House',
  address: '419–421 N Spring St',
  locality: 'Elgin, Illinois 60120',
  district: 'Spring–Douglas Historic District',
  yearBuilt: '1900',
  type: 'Two-flat residence',
  futureRentalUnit: 'Unit 2',
  unitTwoStatus: 'Currently occupied',
  rent: '$1,650',
  rentPeriod: 'per month',
  beds: 2,
  baths: 1,
  email: 'hello@michaelproctor.co',
  inspectionUrl: 'https://reports.spectora.com/v/reports/58827615-7d91-4f46-8673-71625844f11b?access=eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTE0NzIxNzgsImV4cCI6MTc4NzIwNTU5OX0.w2c0_DvQqVzdPt7G7O-6HnE87353QGCnPNQ5m9JvFkI&id_token=81890010f0bfbd744c834b3cce4fb1b2',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=419-421+N+Spring+St%2C+Elgin%2C+IL+60120',
  mapEmbedUrl: 'https://www.google.com/maps?q=419-421+N+Spring+St,+Elgin,+IL+60120&output=embed',
};

export const exteriorPhotos = makePhotos('exterior', 19, [15], 'The property exterior and garage');
export const unitOnePhotos = makePhotos('unit1', 21, [3, 19], 'Unit 1');
export const unitTwoPhotos = makePhotos('unit2', 20, [1, 2, 3, 4, 6, 7, 11, 17, 19, 20], 'Unit 2');
export const technicalPhotos = makePhotos('technical', 12, [7, 8], 'Basement and mechanicals');
export const unitOneFloorPlan = makeFloorPlan('unit1', '1,078');
export const unitTwoFloorPlan = makeFloorPlan('unit2', '752');

export const allPropertyPhotos = [
  ...exteriorPhotos,
  ...unitOnePhotos,
  unitOneFloorPlan,
  ...unitTwoPhotos,
  unitTwoFloorPlan,
  ...technicalPhotos,
];

export const unitTwoAmenities = [
  { title: 'Private kitchen', detail: 'A galley kitchen with a full-size stove, refrigerator, and sink.' },
  { title: 'Two bedrooms', detail: 'Two separate bedrooms, both with closets.' },
  { title: 'Full bathroom', detail: 'One full bathroom inside the unit.' },
  { title: 'Wood floors', detail: 'Wood and parquet flooring through most of the unit.' },
  { title: 'Fenced yard', detail: 'The house sits on a fenced corner lot.' },
  { title: 'Detached garage', detail: 'A two-car detached garage sits behind the house.' },
];

export const technicalDetails = [
  { title: 'Unfinished basement', detail: 'Painted masonry walls, exposed floor framing, and open access to utilities.' },
  { title: 'Heating equipment', detail: 'The existing furnaces, ductwork, and associated controls are shown in the photos.' },
  { title: 'Two water heaters', detail: 'Both water heaters and the surrounding piping are visible in the basement.' },
  { title: 'Utility area', detail: 'A utility sink, plumbing, electrical runs, and service areas are accessible downstairs.' },
  { title: 'Exterior condenser', detail: 'The outdoor Rheem air-conditioning equipment is included in the technical photos.' },
  { title: 'Inspection report', detail: 'The independent Spectora report is linked below for the actual inspection findings.' },
];

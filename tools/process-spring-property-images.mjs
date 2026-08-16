import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import sharp from 'sharp';

const sourceDirectory = '/Users/proctom/Desktop/Create/Projects/105-n spring st house/Export/High Res/1';
const supplementalSourceDirectory = '/Users/proctom/Desktop/Create/Projects/105-n spring st house/Export/High Res/2';
const outputDirectory = path.resolve('public/images/spring-property');
const conversionDirectory = path.resolve('.tmp/spring-property-heic');

const sourceDirectories = {
  exterior: sourceDirectory,
  unit1: sourceDirectory,
  unit2: sourceDirectory,
  technical: supplementalSourceDirectory,
};

const sourceGroups = {
  exterior: [
    'External and garage-9.jpg',
    'External and garage-5.jpg',
    'External and garage-6.jpg',
    'External and garage-7.jpg',
    'External and garage-8.jpg',
    'External and garage-3.jpg',
    'External and garage-4.jpg',
    'External and garage-2.jpg',
    'External and garage-1.jpg',
    'External and garage-10.jpg',
    'External and garage-11.jpg',
    'External and garage-12.jpg',
    'External and garage-13.jpg',
    'External and garage-14.jpg',
    'External and garage-15.jpg',
    'External and garage-16.jpg',
    'External and garage-17.jpg',
    'External and garage-18.jpg',
    'External and garage-19.jpg',
  ],
  unit1: [
    'unit-1-7.jpg',
    'Kitchen-1.jpg',
    'unit-1-1.jpg',
    'unit-1-2.jpg',
    'unit-1-3.jpg',
    'Livingroom looking into kitchen-dinning-1.jpg',
    'Livingroom looking into kitchen-dinning-1-2.jpg',
    'unit-1-6.jpg',
    'unit-1-11.jpg',
    'Dinning room-1.jpg',
    'unit-1-12.jpg',
    'Kitchen-1-2.jpg',
    'Kitchen-1-3.jpg',
    'unit-1-4-2.jpg',
    'unit-1-4.jpg',
    'unit-1-5.jpg',
    'unit-1-8.jpg',
    'unit-1-9.jpg',
    'unit-1-10.jpg',
    'unit-1-13.jpg',
    'unit-1-14.jpg',
  ],
  unit2: [
    'unit-2-1.jpg',
    'unit-2-9.jpg',
    'unit-2-19.jpg',
    'unit-2-2.jpg',
    'unit-2-3.jpg',
    'unit-2-8.jpg',
    'unit-2-7.jpg',
    'unit-2-12.jpg',
    'unit-2-13.jpg',
    'unit-2-4.jpg',
    'unit-2-5.jpg',
    'unit-2-6.jpg',
    'unit-2-17.jpg',
    'unit-2-18.jpg',
    'unit-2-10.jpg',
    'unit-2-11.jpg',
    'unit-2-14.jpg',
    'unit-2-15.jpg',
    'unit-2-16.jpg',
    'unit-2-20.jpg',
  ],
  technical: [
    'Screenshot 2026-08-16 at 1.18.37 PM.jpg',
    'Screenshot 2026-08-16 at 1.18.47 PM.jpg',
    'Screenshot 2026-08-16 at 1.19.00 PM.jpg',
    'Screenshot 2026-08-16 at 1.18.53 PM.jpg',
    'Screenshot 2026-08-16 at 1.18.29 PM.jpg',
    'Screenshot 2026-08-16 at 1.18.14 PM.jpg',
    'Screenshot 2026-08-16 at 1.12.04 PM.jpg',
    'Screenshot 2026-08-16 at 1.19.10 PM.jpg',
    'IMG_4039.heic',
    'IMG_4063.heic',
    'IMG_3984.HEIC',
    'IMG_3983.HEIC',
  ],
};

const floorPlans = [
  { stem: 'floor-plan-unit1', filename: 'unit 1 floor plan.jpg' },
  { stem: 'floor-plan-unit2', filename: 'unit 2 floor plan.jpg' },
];

fs.mkdirSync(outputDirectory, { recursive: true });
fs.mkdirSync(conversionDirectory, { recursive: true });

function makeSharpCompatible(sourcePath, stem) {
  if (path.extname(sourcePath).toLowerCase() !== '.heic') return sourcePath;

  const convertedPath = path.join(conversionDirectory, `${stem}.jpg`);
  execFileSync('/usr/bin/sips', ['-s', 'format', 'jpeg', sourcePath, '--out', convertedPath], { stdio: 'ignore' });
  return convertedPath;
}

const manifest = {};

for (const [group, filenames] of Object.entries(sourceGroups)) {
  manifest[group] = [];

  for (let index = 0; index < filenames.length; index += 1) {
    const filename = filenames[index];
    const sourcePath = path.join(sourceDirectories[group], filename);
    const stem = `${group}-${String(index + 1).padStart(2, '0')}`;
    const compatibleSourcePath = makeSharpCompatible(sourcePath, stem);
    const image = sharp(compatibleSourcePath).rotate().modulate({ brightness: 1.02, saturation: 0.96 });

    const metadata = await image.metadata();
    const landscape = (metadata.width ?? 1) >= (metadata.height ?? 1);

    await image
      .clone()
      .resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 78, effort: 5, smartSubsample: true })
      .toFile(path.join(outputDirectory, `${stem}-1600.webp`));

    await image
      .clone()
      .resize({ width: 840, height: 840, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 74, effort: 5, smartSubsample: true })
      .toFile(path.join(outputDirectory, `${stem}-840.webp`));

    manifest[group].push({
      stem,
      source: filename,
      orientation: landscape ? 'landscape' : 'portrait',
    });
  }
}

manifest.floorPlans = [];

for (const { stem, filename } of floorPlans) {
  const sourcePath = path.join(supplementalSourceDirectory, filename);
  const image = sharp(sourcePath).rotate().flatten({ background: '#f4f0e7' });
  const metadata = await image.metadata();

  await image
    .clone()
    .resize({ width: 1600, height: 2000, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 88, effort: 5, smartSubsample: true })
    .toFile(path.join(outputDirectory, `${stem}-1600.webp`));

  await image
    .clone()
    .resize({ width: 840, height: 1200, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 84, effort: 5, smartSubsample: true })
    .toFile(path.join(outputDirectory, `${stem}-840.webp`));

  manifest.floorPlans.push({
    stem,
    source: filename,
    orientation: (metadata.width ?? 1) >= (metadata.height ?? 1) ? 'landscape' : 'portrait',
  });
}

const heroFilename = 'External and garage-7.jpg';
const heroSource = path.join(sourceDirectory, heroFilename);
await sharp(heroSource)
  .rotate()
  .modulate({ brightness: 0.95, saturation: 0.9 })
  .resize(2400, 1600, { fit: 'cover', position: 'attention' })
  .webp({ quality: 82, effort: 5, smartSubsample: true })
  .toFile(path.join(outputDirectory, 'hero-2400.webp'));

const socialOverlay = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
        <stop offset="25%" stop-color="#172018" stop-opacity="0"/>
        <stop offset="100%" stop-color="#172018" stop-opacity="0.88"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#fade)"/>
    <text x="64" y="505" fill="#f4f0e7" font-family="Georgia, serif" font-size="62">My new home.</text>
    <text x="68" y="557" fill="#f4f0e7" fill-opacity="0.78" font-family="Arial, sans-serif" font-size="20" letter-spacing="4">419–421 N SPRING ST · ELGIN, ILLINOIS</text>
  </svg>
`);

await sharp(heroSource)
  .rotate()
  .modulate({ brightness: 0.92, saturation: 0.88 })
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .composite([{ input: socialOverlay }])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(path.join(outputDirectory, 'spring-property-social.jpg'));

fs.writeFileSync(
  path.join(outputDirectory, 'manifest.json'),
  `${JSON.stringify(manifest, null, 2)}\n`,
  'utf8',
);

const total = Object.values(manifest).reduce((sum, images) => sum + images.length, 0);
console.log(`Processed ${total} source photographs into ${total * 2 + 2} delivery assets.`);

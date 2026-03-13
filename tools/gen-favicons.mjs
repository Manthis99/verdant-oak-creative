#!/usr/bin/env node
// Generates PNG favicon files from favicon.svg using sharp
// Run: node tools/gen-favicons.js

import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const path = require('path');
const fs = require('fs');

let sharp;
try {
  sharp = require('sharp');
} catch (e) {
  console.error('sharp not found. Install with: npm install sharp');
  process.exit(1);
}

const publicDir = path.join(process.cwd(), 'public');
const svgPath = path.join(publicDir, 'favicon.svg');
const svgBuffer = fs.readFileSync(svgPath);

const sizes = [
  { size: 16,  name: 'favicon-16x16.png' },
  { size: 32,  name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' },
];

async function generate() {
  console.log('Generating favicons from favicon.svg...');
  for (const { size, name } of sizes) {
    const outPath = path.join(publicDir, name);
    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`  ✓ ${name} (${size}×${size})`);
  }
  console.log('\nAll favicons generated in /public');
}

generate().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});

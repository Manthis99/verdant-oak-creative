#!/usr/bin/env node
// Generates PNG favicon files from favicon.svg using sharp
// Run: node tools/gen-favicons.js

import path from 'path';
import fs from 'fs';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public');
const pngPath = path.join(publicDir, 'logo.png');
const pngBuffer = fs.readFileSync(pngPath);

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
    await sharp(pngBuffer)
      .resize(size, size)
      .png()
      .toFile(outPath);
    console.log(`  ✓ ${name} (${size}×${size})`);
  }
  console.log('\nGenerating favicon.ico (16x16 + 32x32)...');
  const png16 = await sharp(pngBuffer).resize(16, 16).png().toBuffer();
  const png32 = await sharp(pngBuffer).resize(32, 32).png().toBuffer();
  
  const numImages = 2;
  const headerSize = 6;
  const entrySize = 16;
  const dataOffset = headerSize + entrySize * numImages;
  
  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);
  
  const entry16 = Buffer.alloc(entrySize);
  entry16.writeUInt8(16, 0);
  entry16.writeUInt8(16, 1);
  entry16.writeUInt8(0, 2);
  entry16.writeUInt8(0, 3);
  entry16.writeUInt16LE(1, 4);
  entry16.writeUInt16LE(32, 6);
  entry16.writeUInt32LE(png16.length, 8);
  entry16.writeUInt32LE(dataOffset, 12);
  
  const entry32 = Buffer.alloc(entrySize);
  entry32.writeUInt8(32, 0);
  entry32.writeUInt8(32, 1);
  entry32.writeUInt8(0, 2);
  entry32.writeUInt8(0, 3);
  entry32.writeUInt16LE(1, 4);
  entry32.writeUInt16LE(32, 6);
  entry32.writeUInt32LE(png32.length, 8);
  entry32.writeUInt32LE(dataOffset + png16.length, 12);
  
  const ico = Buffer.concat([header, entry16, entry32, png16, png32]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), ico);
  console.log('  ✓ favicon.ico written');
  
  console.log('\nAll favicons generated in /public');
}

generate().catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});

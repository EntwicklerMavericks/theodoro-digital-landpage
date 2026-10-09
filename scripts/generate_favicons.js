import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateFavicons() {
  const publicDir = path.resolve('public');
  const logoPath = path.join(publicDir, 'theodoro-logo.png');
  
  if (!fs.existsSync(logoPath)) {
    console.error('theodoro-logo.png not found!');
    return;
  }

  // 1. Generate PNG favicons
  await sharp(logoPath).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16x16.png'));
  await sharp(logoPath).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32x32.png'));
  await sharp(logoPath).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
  console.log('Generated PNG icons: favicon-16x16.png, favicon-32x32.png, apple-touch-icon.png');

  // 2. Generate multi-resolution ICO (16, 32, 48)
  const sizes = [16, 32, 48];
  const pngBuffers = [];
  for (const s of sizes) {
    const buf = await sharp(logoPath).resize(s, s).png().toBuffer();
    pngBuffers.push({ size: s, buf });
  }

  const numImages = pngBuffers.length;
  const headerLen = 6;
  const dirEntryLen = 16;
  let offset = headerLen + dirEntryLen * numImages;

  const header = Buffer.alloc(headerLen);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  for (const item of pngBuffers) {
    const entry = Buffer.alloc(dirEntryLen);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 0);
    entry.writeUInt8(item.size === 256 ? 0 : item.size, 1);
    entry.writeUInt8(0, 2);
    entry.writeUInt8(0, 3);
    entry.writeUInt16LE(1, 4);
    entry.writeUInt16LE(32, 6);
    entry.writeUInt32LE(item.buf.length, 8);
    entry.writeUInt32LE(offset, 12);
    dirEntries.push(entry);
    offset += item.buf.length;
  }

  const icoBuffer = Buffer.concat([header, ...dirEntries, ...pngBuffers.map(p => p.buf)]);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico successfully! Size:', icoBuffer.length);
}

generateFavicons().catch(err => {
  console.error(err);
  process.exit(1);
});

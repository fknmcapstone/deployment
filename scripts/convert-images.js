const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');

async function convertToWebP(inputPath) {
  const filename = path.basename(inputPath, path.extname(inputPath));
  const outputPath = path.join(publicDir, `${filename}.webp`);
  
  try {
    await sharp(inputPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(outputPath);
    console.log(`Converted ${inputPath} to WebP`);
  } catch (error) {
    console.error(`Error converting ${inputPath}:`, error);
  }
}

async function main() {
  const files = fs.readdirSync(publicDir);
  const jpgFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.jpeg')
  );

  for (const file of jpgFiles) {
    const inputPath = path.join(publicDir, file);
    await convertToWebP(inputPath);
  }
}

main().catch(console.error); 
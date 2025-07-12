
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = 'public/sozai';
const outputDir = 'public/sozai/webp';

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read all files from the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading input directory:', err);
    return;
  }

  files.forEach(file => {
    const inputFile = path.join(inputDir, file);
    const outputFile = path.join(outputDir, `${path.parse(file).name}.webp`);

    // Check if the file is a PNG or JPG
    if (/\.(png|jpe?g)$/i.test(file)) {
      sharp(inputFile)
        .webp({ quality: 80 })
        .toFile(outputFile, (err, info) => {
          if (err) {
            console.error(`Error converting ${file}:`, err);
          } else {
            console.log(`Successfully converted ${file} to WebP:`, info);
          }
        });
    }
  });
});

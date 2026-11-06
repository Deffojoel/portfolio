/**
 * Prépare les photos du site à partir des originaux de images/, qui ne sont jamais modifiés.
 * Sortie : src/assets/photos/. Astro génère ensuite les AVIF et WebP responsives.
 *
 * Usage : npm run photos
 * Le détourage de image3.jpg, créé à part, est attendu dans src/assets/photos/source/portrait-cutout.png.
 */
import { existsSync, mkdirSync } from 'node:fs';
import sharp from 'sharp';

const out = 'src/assets/photos';
mkdirSync(out, { recursive: true });

/**
 * Courbe de tons douce : relève les tons moyens sans brûler les hautes lumières,
 * et pose le point noir pour que le fond se fonde dans le noir du site.
 */
async function toneCurve(input, { gamma, black }) {
  const { data, info } = await sharp(input).greyscale().raw().toBuffer({ resolveWithObject: true });
  const lut = Uint8Array.from({ length: 256 }, (_, v) => {
    const x = Math.max(0, v - black) / (255 - black);
    return Math.round(255 * x ** gamma);
  });
  for (let i = 0; i < data.length; i++) data[i] = lut[data[i]];
  return sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } });
}

// Photo principale : déjà en N&B sur fond noir.
const hero = await toneCurve('images/image1.jpg', { gamma: 0.68, black: 5 });
await hero
  .sharpen({ sigma: 0.6, m1: 0.3, m2: 0.6 })
  .jpeg({ quality: 93, chromaSubsampling: '4:4:4' })
  .toFile(`${out}/hero.jpg`);

// Portrait secondaire : détouré, posé sur noir, en N&B pour rejoindre la photo principale.
const cutout = `${out}/source/portrait-cutout.png`;
if (!existsSync(cutout)) {
  console.warn(`Détourage absent (${cutout}) : portrait conservé tel quel.`);
} else {
  const { width, height } = await sharp(cutout).metadata();

  // Le contour est resserré de quelques pixels pour éviter un liseré clair sur le noir.
  const alpha = await sharp(cutout).extractChannel('alpha').blur(7).linear(3, -400).toBuffer();
  const onBlack = await sharp(cutout)
    .removeAlpha()
    .joinChannel(alpha)
    .flatten({ background: '#000000' })
    .jpeg({ quality: 100 })
    .toBuffer();

  // Lumière latérale et bas de cadre fondu vers le noir, comme sur la photo principale.
  const shade = Buffer.from(`<svg width="${width}" height="${height}"><defs>
    <linearGradient id="b" x1="0" y1="0" x2="0" y2="1"><stop offset=".52" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".94"/></linearGradient>
    <linearGradient id="s" x1="0" y1="0" x2="1" y2="0"><stop offset=".45" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></linearGradient>
  </defs><rect width="100%" height="100%" fill="url(#b)"/><rect width="100%" height="100%" fill="url(#s)"/></svg>`);

  const graded = await toneCurve(onBlack, { gamma: 1.12, black: 4 });
  await sharp(await graded.png().toBuffer())
    .composite([{ input: shade }])
    .sharpen({ sigma: 0.7, m1: 0.3, m2: 0.6 })
    .jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
    .toFile(`${out}/portrait.jpg`);
}

console.log('Photos prêtes dans', out);

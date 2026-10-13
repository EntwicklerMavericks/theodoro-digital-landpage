import sharp from 'sharp';
import path from 'path';

async function generateOGBanner() {
  const width = 1200;
  const height = 630;

  const svgBanner = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#020203" />
        <stop offset="50%" stop-color="#08060c" />
        <stop offset="100%" stop-color="#030205" />
      </linearGradient>
      
      <radialGradient id="neon-glow" cx="50%" cy="45%" r="55%">
        <stop offset="0%" stop-color="#a855f7" stop-opacity="0.32" />
        <stop offset="45%" stop-color="#7e22ce" stop-opacity="0.12" />
        <stop offset="100%" stop-color="#020203" stop-opacity="0" />
      </radialGradient>

      <linearGradient id="text-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="50%" stop-color="#d8b4fe" />
        <stop offset="100%" stop-color="#a855f7" />
      </linearGradient>

      <linearGradient id="logo-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="100%" stop-color="#a855f7" />
      </linearGradient>
      
      <linearGradient id="border-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="rgba(168, 85, 247, 0.7)" />
        <stop offset="50%" stop-color="rgba(255, 255, 255, 0.15)" />
        <stop offset="100%" stop-color="rgba(168, 85, 247, 0.5)" />
      </linearGradient>
      
      <filter id="logo-drop" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="8" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg-grad)" />
    <rect width="${width}" height="${height}" fill="url(#neon-glow)" />

    <!-- Subtle Cyber Grid -->
    <g stroke="rgba(255, 255, 255, 0.03)" stroke-width="1">
      <line x1="0" y1="105" x2="${width}" y2="105" />
      <line x1="0" y1="210" x2="${width}" y2="210" />
      <line x1="0" y1="315" x2="${width}" y2="315" />
      <line x1="0" y1="420" x2="${width}" y2="420" />
      <line x1="0" y1="525" x2="${width}" y2="525" />
      
      <line x1="200" y1="0" x2="200" y2="${height}" />
      <line x1="400" y1="0" x2="400" y2="${height}" />
      <line x1="600" y1="0" x2="600" y2="${height}" />
      <line x1="800" y1="0" x2="800" y2="${height}" />
      <line x1="1000" y1="0" x2="1000" y2="${height}" />
    </g>

    <!-- Outer Card Frame -->
    <rect x="30" y="30" width="1140" height="570" rx="20" fill="none" stroke="url(#border-grad)" stroke-width="2" />
    <rect x="34" y="34" width="1132" height="562" rx="18" fill="none" stroke="rgba(168, 85, 247, 0.15)" stroke-width="1" />

    <!-- Corner Accents -->
    <path d="M 40 70 L 40 40 L 70 40" stroke="#c084fc" stroke-width="3" fill="none" />
    <path d="M 1160 70 L 1160 40 L 1130 40" stroke="#c084fc" stroke-width="3" fill="none" />
    <path d="M 40 560 L 40 590 L 70 590" stroke="#c084fc" stroke-width="3" fill="none" />
    <path d="M 1160 560 L 1160 590 L 1130 590" stroke="#c084fc" stroke-width="3" fill="none" />

    <!-- Top Badge -->
    <g transform="translate(435, 75)">
      <rect x="0" y="0" width="330" height="38" rx="19" fill="rgba(20, 20, 25, 0.85)" stroke="rgba(168, 85, 247, 0.45)" stroke-width="1" />
      <circle cx="22" cy="19" r="4.5" fill="#10b981" />
      <text x="36" y="24" fill="#d8b4fe" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" letter-spacing="2.5">
        DESENVOLVIMENTO • DESIGN • TECH
      </text>
    </g>

    <!-- Center Icon & Brand -->
    <!-- Theodoro Digital Logo Vector -->
    <g transform="translate(540, 145) scale(1.2)" filter="url(#logo-drop)">
      <path d="M 47 14 L 53 14 L 53 80 L 50 88 L 47 80 Z M 41 14 L 5 14 L 10 20 L 41 20 Z M 41 25 L 15 25 L 20 31 L 35 31 L 35 59 L 41 75 Z M 59 14 L 95 14 L 90 20 L 59 20 Z M 59 25 L 85 25 L 80 31 L 65 31 L 65 59 L 59 75 Z" fill="url(#logo-grad)"/>
    </g>

    <!-- Main Title: THEODORO DIGITAL -->
    <text x="600" y="320" text-anchor="middle" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="48" font-weight="900" letter-spacing="6">
      THEODORO <tspan fill="#a855f7">DIGITAL</tspan>
    </text>

    <!-- Headline: Desenvolvimento Web e Soluções Digitais -->
    <text x="600" y="380" text-anchor="middle" fill="url(#text-grad)" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="700" letter-spacing="-0.5">
      Tecnologia sob medida para impulsionar seu negócio
    </text>

    <!-- Subtitle / Value Proposition -->
    <text x="600" y="425" text-anchor="middle" fill="#94a3b8" font-family="system-ui, -apple-system, sans-serif" font-size="19" font-weight="400">
      Landing Pages • Software sob Medida • Sistemas de Alta Performance
    </text>

    <!-- Footer Badges: Website & Tag -->
    <g transform="translate(485, 480)">
      <rect x="0" y="0" width="230" height="42" rx="8" fill="rgba(168, 85, 247, 0.15)" stroke="rgba(168, 85, 247, 0.6)" stroke-width="1.2" />
      <text x="115" y="27" text-anchor="middle" fill="#ffffff" font-family="monospace" font-size="16" font-weight="700" letter-spacing="1.5">
        theodorodigital.com
      </text>
    </g>
  </svg>
  `;

  const outputPath = path.resolve('public', 'banner-og.png');
  await sharp(Buffer.from(svgBanner))
    .png({ quality: 95, compressionLevel: 8 })
    .toFile(outputPath);

  console.log('banner-og.png successfully generated at:', outputPath);
}

generateOGBanner().catch(err => {
  console.error(err);
  process.exit(1);
});

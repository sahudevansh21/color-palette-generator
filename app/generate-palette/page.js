"use client";

import { useState, useEffect } from 'react';

// Utility functions for color manipulation
const hexToRgb = (hex) => {
  const r = parseInt(hex.substring(1, 3), 16);
  const g = parseInt(hex.substring(3, 5), 16);
  const b = parseInt(hex.substring(5, 7), 16);
  return { r, g, b };
};

const rgbToHsl = ({ r, g, b }) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: h * 360, s: s * 100, l: l * 100 };
};

const hslToRgb = ({ h, s, l }) => {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
};

const rgbToHex = ({ r, g, b }) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('');
};

const getContrastTextColor = (hex) => {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#333333' : '#ffffff'; // Dark for light colors, white for dark colors
};


const generateRandomHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return '#' + '0'.repeat(6 - randomColor.length) + randomColor;
};

// Generates a palette based on a base color and scheme
const generatePalette = (baseHex, schemeType, count = 5) => {
  const baseRgb = hexToRgb(baseHex);
  const baseHsl = rgbToHsl(baseRgb);
  const colors = [baseHex];

  switch (schemeType) {
    case 'monochromatic':
      // Generate variations in lightness/saturation
      for (let i = 1; i < count; i++) {
        const newL = (baseHsl.l + (i % 2 === 0 ? -1 : 1) * (i * 10)) % 100;
        const newS = (baseHsl.s + (i % 2 === 0 ? 1 : -1) * (i * 5)) % 100;
        const newRgb = hslToRgb({ h: baseHsl.h, s: Math.max(0, Math.min(100, newS)), l: Math.max(10, Math.min(90, newL)) });
        colors.push(rgbToHex(newRgb));
      }
      break;
    case 'analogous':
      // Colors next to each other on the color wheel (+/- 30 degrees)
      for (let i = 1; i < count; i++) {
        const angleOffset = (i % 2 === 0 ? -1 : 1) * (i * 30);
        const newH = (baseHsl.h + angleOffset + 360) % 360;
        const newRgb = hslToRgb({ h: newH, s: baseHsl.s, l: baseHsl.l });
        colors.push(rgbToHex(newRgb));
      }
      break;
    case 'complementary':
      // Opposite on the color wheel (180 degrees)
      colors.push(rgbToHex(hslToRgb({ h: (baseHsl.h + 180) % 360, s: baseHsl.s, l: baseHsl.l })));
      // Add some lighter/darker shades as well for variety
      if (count > 2) {
        colors.push(rgbToHex(hslToRgb({ h: (baseHsl.h + 180) % 360, s: baseHsl.s, l: Math.min(90, baseHsl.l + 20) })));
        colors.push(rgbToHex(hslToRgb({ h: baseHsl.h, s: baseHsl.s, l: Math.max(10, baseHsl.l - 20) })));
      }
      break;
    case 'triadic':
        // Three colors equally spaced (120 degrees apart)
        colors.push(rgbToHex(hslToRgb({ h: (baseHsl.h + 120) % 360, s: baseHsl.s, l: baseHsl.l })));
        colors.push(rgbToHex(hslToRgb({ h: (baseHsl.h + 240) % 360, s: baseHsl.s, l: baseHsl.l })));
        // Add some variation
        if (count > 3) {
            colors.push(rgbToHex(hslToRgb({ h: baseHsl.h, s: baseHsl.s, l: Math.min(90, baseHsl.l + 15) })));
            colors.push(rgbToHex(hslToRgb({ h: (baseHsl.h + 120) % 360, s: baseHsl.s, l: Math.max(10, baseHsl.l - 15) })));
        }
        break;
    default: // random
      for (let i = 1; i < count; i++) {
        colors.push(generateRandomHex());
      }
      break;
  }

  // Ensure 'count' colors by padding with random if not enough, or truncating
  while (colors.length < count) {
    colors.push(generateRandomHex());
  }
  return colors.slice(0, count);
};


export default function GeneratePalettePage() {
  const [palette, setPalette] = useState([]);
  const [baseColor, setBaseColor] = useState('#8e2de2'); // Default base color
  const [scheme, setScheme] = useState('random');
  const [numColors, setNumColors] = useState(5);
  const [copiedColor, setCopiedColor] = useState(null);

  useEffect(() => {
    // Generate an initial palette on mount
    handleGeneratePalette();
  }, []); // Empty dependency array means this runs once on mount

  const handleGeneratePalette = () => {
    let generatedColors;
    if (scheme === 'random') {
      generatedColors = Array.from({ length: numColors }, generateRandomHex);
    } else {
      generatedColors = generatePalette(baseColor, scheme, numColors);
    }
    setPalette(generatedColors);
  };

  const handleSavePalette = () => {
    const savedPalettes = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    const newPalette = {
      id: Date.now(),
      colors: palette,
      name: `Palette ${savedPalettes.length + 1}`,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('savedPalettes', JSON.stringify([...savedPalettes, newPalette]));
    alert('Palette saved!');
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1000); // Reset copied state after 1 second
  };

  return (
    <main className="container flex-column">
      <h1 className="gradient-text">Generate a New Color Palette</h1>

      <div className="glass-card flex-column flex-center gap-4">
        <h2>Customization Options</h2>
        <div className="flex-wrap flex-center gap-8" style={{ width: '100%' }}>
          <div className="flex-column gap-2" style={{ flex: 1, minWidth: '200px' }}>
            <label htmlFor="baseColor">Base Color:</label>
            <input
              type="text"
              id="baseColor"
              value={baseColor}
              onChange={(e) => setBaseColor(e.target.value)}
              placeholder="#RRGGBB"
              maxLength="7"
              style={{ width: '100%' }}
            />
            {/* Optional: Add a color picker for easier selection */}
            <input
                type="color"
                value={baseColor}
                onChange={(e) => setBaseColor(e.target.value)}
                style={{ width: '100%', height: '40px', padding: '0', border: 'none', background: 'transparent', cursor: 'pointer' }}
            />
          </div>

          <div className="flex-column gap-2" style={{ flex: 1, minWidth: '200px' }}>
            <label htmlFor="schemeType">Scheme Type:</label>
            <select
              id="schemeType"
              value={scheme}
              onChange={(e) => setScheme(e.target.value)}
              style={{ width: '100%', padding: '0.7rem' }}
            >
              <option value="random">Random</option>
              <option value="monochromatic">Monochromatic</option>
              <option value="analogous">Analogous</option>
              <option value="complementary">Complementary</option>
              <option value="triadic">Triadic</option>
            </select>
          </div>

          <div className="flex-column gap-2" style={{ flex: 1, minWidth: '200px' }}>
            <label htmlFor="numColors">Number of Colors:</label>
            <input
              type="range"
              id="numColors"
              min="3"
              max="8"
              value={numColors}
              onChange={(e) => setNumColors(parseInt(e.target.value))}
              style={{ width: '100%' }}
            />
            <span className="text-center">{numColors} colors</span>
          </div>
        </div>

        <button className="gradient-button" onClick={handleGeneratePalette} style={{ marginTop: '2rem' }}>
          Generate Palette
        </button>
      </div>

      {palette.length > 0 && (
        <div className="glass-card" style={{ marginTop: '2rem' }}>
          <h2 className="text-center">Your Generated Palette</h2>
          <div className="color-swatch-grid">
            {palette.map((color, index) => (
              <div
                key={index}
                className={`color-swatch ${copiedColor === color ? 'copied' : ''}`}
                style={{ backgroundColor: color, color: getContrastTextColor(color) }}
                onClick={() => copyToClipboard(color)}
                title={`Click to copy ${color}`}
              >
                <span className="color-swatch-text">{color}</span>
              </div>
            ))}
          </div>
          <div className="flex-center" style={{ marginTop: '2rem' }}>
            <button className="gradient-button" onClick={handleSavePalette}>
              Save Palette
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

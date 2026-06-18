"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

// Utility function to determine contrast text color (copied from generate-palette/page.js)
const hexToRgb = (hex) => {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return { r, g, b };
};

const getContrastTextColor = (hex) => {
    const { r, g, b } = hexToRgb(hex);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance > 0.5 ? '#333333' : '#ffffff';
};


export default function SavedPalettesPage() {
  const [savedPalettes, setSavedPalettes] = useState([]);
  const [copiedColor, setCopiedColor] = useState(null);

  useEffect(() => {
    const storedPalettes = JSON.parse(localStorage.getItem('savedPalettes') || '[]');
    setSavedPalettes(storedPalettes);
  }, []);

  const handleDeletePalette = (id) => {
    const updatedPalettes = savedPalettes.filter((palette) => palette.id !== id);
    setSavedPalettes(updatedPalettes);
    localStorage.setItem('savedPalettes', JSON.stringify(updatedPalettes));
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    setCopiedColor(color);
    setTimeout(() => setCopiedColor(null), 1000); // Reset copied state after 1 second
  };

  return (
    <main className="container flex-column">
      <h1 className="gradient-text">Your Saved Color Palettes</h1>

      {savedPalettes.length === 0 ? (
        <div className="glass-card text-center" style={{ maxWidth: '600px', margin: '2rem auto' }}>
          <p>You haven't saved any palettes yet. Go to <Link href="/generate-palette" style={{ textDecoration: 'underline', color: '#8e2de2' }}>Generate Palette</Link> to create and save some!</p>
        </div>
      ) : (
        <div className="flex-column gap-8">
          {savedPalettes.map((palette) => (
            <div key={palette.id} className="glass-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3>{palette.name}</h3>
                <button
                  onClick={() => handleDeletePalette(palette.id)}
                  className="gradient-button"
                  style={{
                    background: 'linear-gradient(45deg, #e74c3c, #c0392b)', // Red gradient for delete
                    boxShadow: '0 4px 15px rgba(231, 76, 60, 0.4)',
                    padding: '0.6rem 1.2rem'
                  }}
                >
                  Delete
                </button>
              </div>
              <div className="color-swatch-grid">
                {palette.colors.map((color, index) => (
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
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

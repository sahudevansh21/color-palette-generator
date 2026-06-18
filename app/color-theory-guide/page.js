export default function ColorTheoryGuidePage() {
  return (
    <main className="container flex-column">
      <h1 className="gradient-text">Color Theory Guide</h1>

      <div className="glass-card">
        <h2>Understanding the Magic of Colors</h2>
        <p>
          Color theory is a body of practical guidance to color mixing and the visual effects of a specific color combination. It's a cornerstone for designers, artists, and anyone working with visuals. Understanding basic color principles can elevate your projects from good to extraordinary.
        </p>

        <h3>The Color Wheel</h3>
        <p>
          The color wheel is a visual representation of colors arranged according to their chromatic relationship. It helps in understanding how colors relate to each other and how they can be combined harmoniously.
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
          <li><strong>Primary Colors:</strong> Red, Yellow, Blue – the fundamental colors that cannot be created by mixing other colors.</li>
          <li><strong>Secondary Colors:</strong> Orange, Green, Violet – created by mixing two primary colors.</li>
          <li><strong>Tertiary Colors:</strong> Red-Orange, Yellow-Orange, Yellow-Green, Blue-Green, Blue-Violet, Red-Violet – created by mixing a primary and a secondary color.</li>
        </ul>

        <h3>Color Schemes</h3>
        <p>
          Color schemes are logical combinations of colors that create visual harmony. Here are some common types:
        </p>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
          <li>
            <h4>Monochromatic</h4>
            <p>Uses different shades, tints, and tones of a single color. It's subtle and harmonious, creating a calming effect. Think light blue, regular blue, and dark blue.</p>
          </li>
          <li>
            <h4>Analogous</h4>
            <p>Uses colors that are next to each other on the color wheel. They usually match well and create serene and comfortable designs. Example: blue, blue-green, and green.</p>
          </li>
          <li>
            <h4>Complementary</h4>
            <p>Uses colors that are directly opposite each other on the color wheel. They provide high contrast and can be very vibrant, but should be used carefully to avoid overwhelming the viewer. Example: Red and Green, Blue and Orange.</p>
          </li>
          <li>
            <h4>Triadic</h4>
            <p>Uses three colors that are evenly spaced around the color wheel, forming an equilateral triangle. These schemes are vibrant and create strong visual contrast while retaining balance. Example: Red, Yellow, Blue.</p>
          </li>
          <li>
            <h4>Split Complementary</h4>
            <p>Uses a base color and the two colors adjacent to its complement. Offers high contrast while being less jarring than a direct complementary scheme.</p>
          </li>
          <li>
            <h4>Tetradic (Rectangular)</h4>
            <p>Uses four colors arranged into two complementary pairs, forming a rectangle on the color wheel. Offers rich color possibilities but can be challenging to balance.</p>
          </li>
        </ul>

        <h3>Key Color Terms</h3>
        <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
          <li><strong>Hue:</strong> The pure spectrum color (e.g., red, blue, green).</li>
          <li><strong>Saturation:</strong> The intensity or purity of a color. A highly saturated color is vivid; a less saturated color appears grayer.</li>
          <li><strong>Luminance/Value:</strong> The lightness or darkness of a color.</li>
          <li><strong>Tint:</strong> A color mixed with white to increase lightness.</li>
          <li><strong>Shade:</strong> A color mixed with black to increase darkness.</li>
          <li><strong>Tone:</strong> A color mixed with gray (both white and black) to reduce saturation.</li>
        </ul>

        <p style={{ marginTop: '2rem', textAlign: 'center' }}>
          Experiment with these concepts using our generator to find your perfect palette!
        </p>
      </div>
    </main>
  );
}

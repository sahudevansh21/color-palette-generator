# Creative Color Palette Generator

Welcome to the Creative Color Palette Generator! This application helps designers, artists, and hobbyists find aesthetically pleasing and harmonious color combinations for their projects. Say goodbye to time-consuming manual experimentation and inconsistent visual results.

## Problem Solved

Designers, artists, and hobbyists often face challenges in quickly finding aesthetically pleasing and harmonious color combinations for their projects. Manually experimenting with colors can be time-consuming and lead to inconsistent visual results, hindering their creative workflow.

## Solution Offered

This website offers a simple tool to generate unique and coherent color palettes based on various inputs or random selection. Users can explore different color schemes, save their favorite palettes to a personal collection, and easily copy color codes for use in their designs.

## Features

*   **Generate Palettes:** Quickly create new color palettes with options for different schemes (monochromatic, analogous, complementary, triadic, random) and a specified number of colors.
*   **Base Color Input:** Start your palette generation from a specific HEX color.
*   **Save Palettes:** Store your favorite generated palettes in your browser's local storage for future reference.
*   **Copy Color Codes:** Easily copy individual HEX color codes to your clipboard with a single click.
*   **Color Theory Guide:** Learn about basic color theory concepts and different color schemes to enhance your understanding and design choices.
*   **Stunning UI:** Features a dark background, vibrant gradient accents, glassmorphic cards, smooth transitions, and modern typography for an enjoyable user experience.
*   **Responsive Design:** Works beautifully across various screen sizes, from desktop to mobile.

## Technologies Used

*   **Next.js 14 (App Router):** For a robust and scalable React framework with server and client components.
*   **React 18:** For building interactive user interfaces.
*   **Pure CSS:** All styling is handled with global CSS, demonstrating advanced techniques without relying on frameworks like Tailwind CSS or CSS modules.

## Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

*   Node.js (v18 or higher recommended)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/color-palette-generator.git
    cd color-palette-generator
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Development Server

To start the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

This will create an optimized build in the `.next` directory.

### Running in Production Mode

To start the application in production mode after building:

```bash
npm run start
# or
yarn start
```

## Project Structure

```
.
├── app/
│   ├── generate-palette/  # Page for generating new palettes
│   │   └── page.js
│   ├── saved-palettes/    # Page for viewing and managing saved palettes
│   │   └── page.js
│   ├── color-theory-guide/ # Page with educational content on color theory
│   │   └── page.js
│   ├── globals.css        # Global styles for the entire application
│   ├── layout.js          # Root layout including navigation
│   └── page.js            # Home page
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── README.md              # Project documentation
└── .gitignore             # Files and directories to ignore in Git
```

## Contributing

Feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is open source and available under the [MIT License](LICENSE).

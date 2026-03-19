# Quadque Web

The official company website frontend for **Quadque Technologies** — a full-service digital agency delivering web, mobile, and cloud solutions. This repository powers the public-facing website that showcases services, portfolio, team, and company information.

Part of the **Quadque digital platform ecosystem**.

---

## Features

- Responsive single-page application with modern UI/UX
- Full-page scrolling sections for immersive content presentation
- Animated counters, carousels, and reveal-on-scroll effects
- SEO-optimized with React Helmet and automated sitemap generation
- Pre-rendered static pages via React Snap for improved load times
- Environment-based configuration for development and production
- Tailwind CSS utility-first styling with custom PostCSS pipeline
- Lottie animations for engaging visual elements
- Text-to-speech accessibility features

## Tech Stack

| Layer        | Technology                                      |
|--------------|--------------------------------------------------|
| Framework    | React 18 (Create React App)                     |
| Routing      | React Router DOM v6                              |
| Styling      | Tailwind CSS 3, PostCSS, Ant Design 5           |
| Animations   | Lottie React, React Reveal, React Typical        |
| HTTP Client  | Axios                                            |
| Build        | Webpack, Babel, React Scripts                    |
| SEO          | React Helmet, React Snap, Sitemap Builder        |
| Testing      | Jest, React Testing Library                      |

## Getting Started

### Prerequisites

- Node.js >= 16
- Yarn or npm

### Installation

```bash
git clone https://github.com/mhmalvi/quadque-web.git
cd quadque-web
yarn install
```

### Environment Configuration

Copy the example environment files and configure as needed:

```
.env.development.local   — Local development settings
.env.production           — Production settings
```

### Development

```bash
yarn start-dev
```

### Production Build

```bash
yarn build-prod
```

### Generate Sitemap

```bash
yarn sitemap
```

## Project Structure

```
quadque-web/
├── public/              # Static assets and HTML template
├── src/
│   ├── Components/      # Reusable UI components
│   ├── assets/          # Images, icons, and static resources
│   ├── App.jsx          # Root application component
│   └── index.js         # Entry point
├── routes.js            # Route definitions
├── sitemap-builder.js   # SEO sitemap generator
├── tailwind.config.js   # Tailwind CSS configuration
├── webpack.config.js    # Webpack overrides
└── postcss.config.js    # PostCSS plugins
```

## License

Proprietary — Quadque Technologies. All rights reserved.

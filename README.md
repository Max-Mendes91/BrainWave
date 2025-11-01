# BrainWave

A modern, responsive landing page built with React and Tailwind CSS, showcasing AI-powered features and services.

## Overview

BrainWave is a sleek, professionally designed website featuring smooth animations, parallax effects, and a modern UI/UX. The project demonstrates best practices in modern web development with React and showcases various sections including hero, benefits, collaboration, services, pricing, roadmap, and footer.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly across all devices
- **Modern UI/UX**: Clean and professional design with smooth animations
- **Parallax Effects**: Engaging scroll-based parallax animations using react-just-parallax
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **React Router**: Client-side routing for seamless navigation
- **Scroll Lock**: Enhanced user experience with scroll-lock functionality
- **Component-Based Architecture**: Modular and reusable React components

## Tech Stack

- **React 19.1.1**: Latest version of React for building the UI
- **Vite 7.1.7**: Fast build tool and development server
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **React Router DOM 7.9.5**: Declarative routing for React
- **React Just Parallax 3.1.16**: Parallax scrolling effects
- **ESLint**: Code linting and quality assurance

## Project Structure

```
BrainWave/
├── src/
│   ├── Components/
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Benefits.jsx
│   │   ├── Colaboration.jsx
│   │   ├── Services.jsx
│   │   ├── Pricing.jsx
│   │   ├── PricingList.jsx
│   │   ├── Roadmap.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Heading.jsx
│   │   └── Tagline.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Max-Mendes91/BrainWave.git
cd BrainWave
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build the project for production
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run ESLint to check code quality

## Building for Production

To create a production build:

```bash
npm run build
```

The build output will be in the `dist` folder, ready to be deployed.

## Deployment

This project is deployed on [Vercel](https://vercel.com). Any changes pushed to the main branch will automatically trigger a new deployment.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Max-Mendes91/BrainWave)

## Components

- **Header**: Navigation bar with responsive menu
- **Hero**: Eye-catching hero section with call-to-action
- **Benefits**: Showcase of key benefits and features
- **Collaboration**: Collaboration features and tools
- **Services**: Services offered with detailed descriptions
- **Pricing**: Pricing tiers and plan comparison
- **Roadmap**: Product roadmap and future features
- **Footer**: Site footer with links and information

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add some amazing feature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Max Mendes**
- GitHub: [@Max-Mendes91](https://github.com/Max-Mendes91)

## Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Deployed on Vercel

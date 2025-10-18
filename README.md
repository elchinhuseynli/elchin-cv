# Elchin Huseynli - CV Portfolio

A modern, responsive CV portfolio built with React, TypeScript, and Shadcn UI components.

## Features

- 🌙 **Dark/Light Mode** - Toggle between themes with persistent storage
- 🌍 **Bilingual Support** - Czech and English language switching
- 📱 **Responsive Design** - Optimized for all device sizes
- ⚡ **Modern Stack** - Built with React 18, TypeScript, and Vite
- 🎨 **Beautiful UI** - Shadcn UI components with Tailwind CSS
- 📊 **Interactive Portfolio** - Filterable project showcase
- 💼 **Professional Experience** - Detailed work history and skills

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, Shadcn UI
- **Build Tool**: Vite
- **Icons**: Lucide React
- **State Management**: React hooks with localStorage persistence

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd elchin-cv
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

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── ui/           # Shadcn UI components
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and Tailwind imports
```

## Customization

### Adding Your Information

Edit the data objects in `src/App.tsx`:

- `profile` - Personal information and contact details
- `about` - About section content (bilingual)
- `services` - Services offered
- `experience` - Work experience (bilingual)
- `skillsPrimary` & `skillsSecondary` - Technical and soft skills
- `featuredProjects` - Portfolio projects

### Styling

The project uses Tailwind CSS with custom CSS variables for theming. Colors and styling can be customized in:

- `src/index.css` - CSS variables and global styles
- `tailwind.config.js` - Tailwind configuration

### Adding New Components

The project uses Shadcn UI components. To add new components:

1. Install the component: `npx shadcn-ui@latest add [component-name]`
2. Import and use in your components

## Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## Features in Detail

### Theme System
- Automatic dark/light mode detection
- Manual toggle with persistent storage
- CSS custom properties for consistent theming

### Language System
- Czech and English support
- Persistent language selection
- All content dynamically updates

### Portfolio Filtering
- Category-based project filtering
- Responsive grid layout
- Hover effects and animations

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: webmaster@flexagency.cz
- **Website**: https://flexagency.cz
- **LinkedIn**: https://www.linkedin.com/in/elchin-huseynli/

---

Built with ❤️ by Elchin Huseynli


# Portfolio Website

A modern, animated portfolio website with smooth scrolling and interactive elements.

## Project Structure

This project is built with:
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Framer Motion
- Lenis for smooth scrolling
- GSAP for animations

## Running in VSCode

### Prerequisites

- Node.js (v16.0.0 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- VSCode with recommended extensions:
  - ESLint
  - Prettier
  - TypeScript and JavaScript Language Features
  - Tailwind CSS IntelliSense

### Setup Instructions

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:8080
   ```

### Recommended VSCode Settings

Create or update `.vscode/settings.json` in your project root with:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"]
  ]
}
```

### Troubleshooting Common Issues

1. **TypeScript Errors**: 
   - Run `npm run tsc` to check for TypeScript errors
   - Make sure your TypeScript version is compatible (v4.9.0 or higher)

2. **Build Issues**:
   - If you encounter build errors, try cleaning the cache with `npm run clean` (create this script in package.json if needed)
   - Alternatively: `rm -rf node_modules/.vite`

3. **Lenis Smooth Scrolling**:
   - If smooth scrolling isn't working properly, check browser compatibility
   - Disable any browser extensions that might interfere with scrolling

4. **Animation Performance**:
   - If animations are sluggish, check your browser's hardware acceleration settings
   - Consider reducing animation complexity for lower-end devices

## Development Notes

- The project uses React Router for navigation
- Framer Motion is used for page transitions and element animations
- GSAP powers more complex animations
- Tailwind CSS handles styling with some custom configurations

## Deployment

To build the project for production:

```sh
npm run build
```

This will generate optimized assets in the `dist` directory. You can then deploy these files to any static hosting service.

## Additional Commands

- `npm run lint` - Run ESLint to check for code quality issues
- `npm run preview` - Preview the production build locally

## Contributing

1. Create a feature branch from main
2. Make your changes
3. Submit a pull request

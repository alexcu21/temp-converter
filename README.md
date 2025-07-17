# Temperature Converter - TypeScript, Sass & Tailwind CSS

A beautiful and modern temperature converter built with TypeScript, Sass, and Tailwind CSS that allows you to convert between Celsius, Fahrenheit, and Kelvin.

## Features

- Convert temperatures between Celsius, Fahrenheit, and Kelvin
- Real-time button state management (disabled until all fields are filled)
- Modern, responsive UI with Tailwind CSS and Sass
- Type-safe code with TypeScript
- Input validation with visual feedback
- Clean and intuitive user interface

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Install the dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## How to Use

1. Enter a temperature value in the input field
2. Select the source unit (Celsius, Fahrenheit, or Kelvin) from the first dropdown
3. Select the target unit from the second dropdown
4. Click the "Convert" button to see the result

The convert button will be disabled until all three fields are properly filled.

## Available Scripts

- `npm run dev` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build

## Technologies Used

- TypeScript
- Sass (SCSS)
- Tailwind CSS
- Vite (Build tool)
- Modern ES6+ JavaScript

## Project Structure

```
src/
├── main.ts                    # Application entry point
├── temperature-converter.ts   # Main TypeScript class
└── style.scss                # Sass styles with Tailwind imports
```

## TypeScript Features

- ✅ Type-safe temperature unit handling
- ✅ Interface definitions for conversion results
- ✅ Private methods and properties
- ✅ Strict type checking
- ✅ Modern ES6+ class syntax

## Sass Features

- ✅ Custom variables and mixins
- ✅ Nested selectors and & parent selector
- ✅ Custom animations and keyframes
- ✅ Responsive design with media queries
- ✅ Component-based styling with @layer

## Tailwind CSS Features

- ✅ Utility-first CSS framework
- ✅ @apply directive for component classes
- ✅ Custom utility classes
- ✅ Responsive design utilities
- ✅ Beautiful gradients and animations

## Styling Architecture

The project uses a hybrid approach:
- **Tailwind CSS** for utility classes and design system
- **Sass** for custom components, variables, and animations
- **@layer** directive to organize styles properly
- **Custom component classes** for reusable styling
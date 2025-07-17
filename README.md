# Temperature Converter - Svelte App

A beautiful and modern temperature converter built with Svelte that allows you to convert between Celsius, Fahrenheit, and Kelvin.

## Features

- Convert temperatures between Celsius, Fahrenheit, and Kelvin
- Real-time button state management (disabled until all fields are filled)
- Modern, responsive UI with smooth animations
- Input validation
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

- Svelte 4
- Vite (Build tool)
- CSS3 with modern features (Grid, Flexbox, Animations)

## Project Structure

```
src/
├── App.svelte       # Main application component
├── main.js          # Application entry point
└── index.css        # Global styles

index.html           # HTML template
```

## Migration from Vue.js

This Svelte version includes all the functionality from the Vue.js version:

- ✅ Temperature conversion logic
- ✅ Button enable/disable functionality
- ✅ Input validation
- ✅ Modern UI improvements
- ✅ Responsive design
- ✅ Same beautiful styling and animations
- ✅ Reactive statements with `$:` syntax
- ✅ Simplified component structure
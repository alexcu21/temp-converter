# Temperature Converter - React App

A beautiful and modern temperature converter built with React that allows you to convert between Celsius, Fahrenheit, and Kelvin. based on the roadmap challenge: [temp-converter](https://roadmap.sh/projects/temperature-converter)

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
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How to Use

1. Enter a temperature value in the input field
2. Select the source unit (Celsius, Fahrenheit, or Kelvin) from the first dropdown
3. Select the target unit from the second dropdown
4. Click the "Convert" button to see the result

The convert button will be disabled until all three fields are properly filled.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Technologies Used

- React 18
- CSS3 with modern features (Grid, Flexbox, Animations)
- Create React App

## Project Structure

```
src/
├── App.js          # Main application component
├── App.css         # Component-specific styles
├── index.js        # Application entry point
└── index.css       # Global styles

public/
└── index.html      # HTML template
```

## Migration from Vanilla JavaScript

This React version includes all the functionality from the original vanilla JavaScript version:

- ✅ Temperature conversion logic
- ✅ Button enable/disable functionality
- ✅ Input validation
- ✅ Modern UI improvements
- ✅ Responsive design
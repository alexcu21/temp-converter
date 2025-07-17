# Temperature Converter - Vue.js App

A beautiful and modern temperature converter built with Vue.js that allows you to convert between Celsius, Fahrenheit, and Kelvin.

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
npm run serve
```

3. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## How to Use

1. Enter a temperature value in the input field
2. Select the source unit (Celsius, Fahrenheit, or Kelvin) from the first dropdown
3. Select the target unit from the second dropdown
4. Click the "Convert" button to see the result

The convert button will be disabled until all three fields are properly filled.

## Available Scripts

- `npm run serve` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run lint` - Lints and fixes files

## Technologies Used

- Vue.js 3
- CSS3 with modern features (Grid, Flexbox, Animations)
- Vue CLI

## Project Structure

```
src/
├── App.vue         # Main application component
├── main.js         # Application entry point
└── index.css       # Global styles

public/
└── index.html      # HTML template
```

## Migration from React

This Vue.js version includes all the functionality from the React version:

- ✅ Temperature conversion logic
- ✅ Button enable/disable functionality
- ✅ Input validation
- ✅ Modern UI improvements
- ✅ Responsive design
- ✅ Same beautiful styling and animations